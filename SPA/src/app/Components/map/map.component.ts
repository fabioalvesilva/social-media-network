import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { IRelationship } from 'src/app/Model/IRelationship';
import { IUser } from 'src/app/Model/IUser';
import { IPath } from 'src/app/Model/IPath';

import { MapService } from 'src/app/Services/map.service';
import { GUI } from 'dat.gui';

import * as STATS from 'stats.js';
import * as THREE from 'three';
import * as OrbitControls from 'three/examples/jsm/controls/OrbitControls';
import * as OBJLoader from 'three/examples/jsm/loaders/OBJLoader';
import * as DDSLoader from 'three/examples/jsm/loaders/DDSLoader';
import * as MTLLoader from 'three/examples/jsm/loaders/MTLLoader';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnDestroy {

	private userId: any;
	private gui!: GUI;
	private pathAlgorithm: number = 0;
	private audio!: THREE.Audio;

	// The graph
	private adjacencyList = new Map();
	private listUser = new Map();
	private objectsList: any[] = [];
	private objectsTip: THREE.Object3D<THREE.Event>[] = [];

	@ViewChild('rendererCanvas', { static: true })
	public rendererCanvas!: ElementRef<HTMLCanvasElement>;

	public constructor(private mapService: MapService) {

	}

	ngOnDestroy(): void {
		this.gui.hide();
		document.getElementById('statisticsFPS')!.style.visibility = 'hidden';
		this.audio.disconnect();
	}

	ngOnInit(): void {
		/* ## VARIABLES ## */
		// User ID
		this.userId = sessionStorage.getItem("id");

		// Flags to change cameras
		let chosenCamera: number = 0;
		let panMovement: boolean = false

		// follow the movements 
		let mousePosition = new THREE.Vector2();

		// parameters for camera
		let rendererCanvas = document.getElementById('renderCanvas');
		let screen_width = rendererCanvas!.clientWidth, screen_height = rendererCanvas!.clientHeight;
		let view_angle = 45, aspect = screen_width / screen_height, near = 0.1, far = 5000;

		// keyboard listener
		let keyStates: { [x: string]: boolean; } = {};

		// Pointer
		let pointer = new THREE.Vector2();
		let mouse = new THREE.Vector2(), INTERSECTED;

		// Clock
		let clock = new THREE.Clock();

		// graph data
		let players: string[] = [];
		let relationships: string[] = [];
		let visibleObjects: string[] = [];
		let moodObjects: THREE.Object3D<THREE.Event>[] = [];
		let collidableMeshList: THREE.Object3D<THREE.Event>[] = [];
		/* ########### */



		/* ## SCENE ## */
		let scene = new THREE.Scene();
		/* ########### */



		/* ## CAMERAS ## */
		// orbit cameras
		let orbitCamera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);
		orbitCamera.position.set(0, 200, 550);
		orbitCamera.lookAt(scene.position);
		scene.add(orbitCamera);

		// first person shooter cameras
		let fpsCamera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);
		fpsCamera.position.set(0, 10, -250);
		fpsCamera.lookAt(scene.position);
		scene.add(fpsCamera);

		// top camera 
		let topCamera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);
		topCamera.position.set(0, 750, 0);
		topCamera.lookAt(scene.position);
		scene.add(topCamera);

		// orthographic cameras 
		let mapCamera = new THREE.OrthographicCamera(screen_width / -2, screen_width / 2,
			screen_height / 2, screen_height / -2, -5000, 10000);
		mapCamera.up = new THREE.Vector3(0, 0, -1);
		mapCamera.lookAt(new THREE.Vector3(0, -1, 0));
		scene.add(mapCamera);
		/* ########### */



		/* ## LIGHTS ## */
		// Ambient Light
		let ambientLight = new THREE.AmbientLight(0xffffff);
		ambientLight.position.set(0, 0, 0);
		ambientLight.intensity = 0.4;
		ambientLight.visible = true;
		scene.add(ambientLight);

		// Point Light
		let pointLight1 = new THREE.PointLight(0xffff00);
		pointLight1.position.set(1, 20, 1);
		pointLight1.intensity = 0.69;
		pointLight1.visible = true;
		scene.add(pointLight1);

		let pointLight2 = new THREE.PointLight(0xff00ff);
		pointLight2.position.set(100, 100, 100);
		pointLight2.intensity = 0.69;
		pointLight2.visible = true;
		scene.add(pointLight2);

		// Spot Light
		let solidarityLight = new THREE.SpotLight(0xffffff);
		solidarityLight.position.set(0, 200, 0);
		solidarityLight.intensity = 1;
		solidarityLight.angle = 0.25;
		solidarityLight.penumbra = 1;
		scene.add(solidarityLight);
		/* ########### */



		/* ## VISUAL HELPER ## */
		var helperGroup = new THREE.Group();
		var axes = new THREE.AxesHelper(250);
		axes.position.set(0, 40, 0);
		helperGroup.add(axes);

		/*var gridFloor = new THREE.GridHelper(400, 10);
		gridFloor.position.set(0, 0, 0);
		helperGroup.add(gridFloor);*/

		var gridBack = new THREE.GridHelper(400, 10);
		gridBack.position.set(0, 100, 0);
		gridBack.rotation.x = Math.PI / 2;
		helperGroup.add(gridBack);

		var gridLeft = new THREE.GridHelper(400, 10);
		gridLeft.position.set(0, 100, 0);
		gridLeft.rotation.z = Math.PI / 2;
		helperGroup.add(gridLeft);
		helperGroup.visible = false;
		scene.add(helperGroup);
		/* ########### */



		/* ## RENDER ## */
		var renderer = new THREE.WebGLRenderer({
			canvas: rendererCanvas!,
			alpha: false,    // transparent background
			antialias: true // smooth edges
		});
		renderer.setSize(screen_width, screen_height);
		renderer.autoClear = false;
		/* ########### */



		/* ## ORBIT CONTROL ## */
		// orbit control
		let orbitControl = new OrbitControls.OrbitControls(orbitCamera, renderer.domElement);
		/*orbitControl.mouseButtons = {
			//ORBIT: THREE.MOUSE.LEFT,
			//ZOOM: THREE.MOUSE.MIDDLE,
			//PAN: THREE.MOUSE.RIGHT
		};
		/* ########### */



		/* ## AUDIO  ## */
		let audioLoader = new THREE.AudioLoader();
		let listener = new THREE.AudioListener();

		this.audio = new THREE.Audio(listener);
		//audio.crossOrigin = "anonymous";
		let stream = "../../assets/sounds/TheWarOnDrugs.m4a";
		audioLoader.load(stream, (buffer) => {
			this.audio.setBuffer(buffer);
			this.audio.setLoop(true);
			this.audio.play();
		});
		/* ########### */



		/* ## STATS & GUI  ## */
		var statistics = new STATS();
		this.createUserInterface(ambientLight, pointLight1, pointLight2,
			solidarityLight, helperGroup);
		this.gui.close();
		document.body.appendChild(statistics.dom);
		statistics.dom.id = "statisticsFPS";
		/* ########### */



		/* ## RAYCASTER ## */
		var pathRaycaster = new THREE.Raycaster();
		var collisionRaycaster = new THREE.Raycaster();
		var tipRaycaster = new THREE.Raycaster();
		/* ########### */



		/* ## WORLD ## */
		// Ground
		let floorGeometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
		floorGeometry.rotateX(- Math.PI / 2);

		// vertex displacement
		var position = floorGeometry.attributes['position'];
		var floorVertex = new THREE.Vector3();
		for (let i = 0, l = position.count; i < l; i++) {
			floorVertex.fromBufferAttribute(position, i);
			floorVertex.x += Math.random() * 20 - 10;
			floorVertex.y += Math.random() * 2;
			floorVertex.z += Math.random() * 20 - 10;
			position.setXYZ(i, floorVertex.x, floorVertex.y, floorVertex.z);
		}

		position = floorGeometry.attributes['position'];
		var colorsFloor = [];
		var newColorsFloor = new THREE.Color();
		for (let i = 0, l = position.count; i < l; i++) {
			newColorsFloor.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
			colorsFloor.push(newColorsFloor.r, newColorsFloor.g, newColorsFloor.b);
		}

		floorGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colorsFloor, 3));
		var floorMaterial = new THREE.MeshLambertMaterial({ vertexColors: true });
		var floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.receiveShadow = true;
		floor.castShadow = true;
		floor.position.set(0, -5, 0);
		scene.add(floor);

		// Sky
		/*let skyTexture = new THREE.TextureLoader().load("../../assets/textures/SceneTextures/sky1.jpg", () => {
			const rt = new THREE.WebGLCubeRenderTarget(skyTexture.image.height);
			rt.fromEquirectangularTexture(renderer, skyTexture);
			scene.background = rt.texture;
		});*/
		/* ########### */



		/* ## EXTRA GEOMETRY ## */
		let magicBoxGeometry = new THREE.BoxGeometry(20, 20, 20);
		let magicBox = new THREE.Mesh(magicBoxGeometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
		magicBox.position.x = 0;
		magicBox.position.y = 0;
		magicBox.position.z = 0;
		magicBox.visible = false;
		scene.add(magicBox);
		/* ########### */



		// Register the event handler to be called on mouse movement and click and keyboard
		renderer.domElement.addEventListener("wheel", (event) => {
			if (chosenCamera == 0) {
				mousePosition = new THREE.Vector2(event.clientX, screen_height - event.clientY - 1);
				let distanceMin = 1.0, distanceMax = 5.0;
				let deltaY = (<any>event).deltaY;
				let atualZoom = topCamera.zoom;
				let finalZoom = atualZoom + -0.001 * deltaY;
				finalZoom = THREE.MathUtils.clamp(finalZoom, distanceMin, distanceMax);
				topCamera.zoom = finalZoom;
				topCamera.updateProjectionMatrix();
			}
		}, true);

		var personColor: any;
		var personSelected: any = magicBox;
		renderer.domElement.addEventListener("mousedown", (event) => {
			mousePosition = new THREE.Vector2(event.clientX, screen_height - event.clientY - 1);

			if (event.buttons == 1 && chosenCamera == 2) {
				for (var i = 0; i < visibleObjects.length; i++) {
					var outline1 = (scene.getObjectByName(visibleObjects[i]));
					outline1!.visible = false;
				}

				fpsCamera.updateMatrixWorld();
				// find intersections
				pathRaycaster.setFromCamera(pointer, fpsCamera);
				let intersects = pathRaycaster.intersectObjects(this.objectsList);
				if (intersects.length > 0) {

					if (personSelected != intersects[0].object) {
						personSelected.material.emissive.setHex(personColor);
						personSelected = intersects[0].object;
						personColor = personSelected.material.emissive.getHex();
						personSelected.currentHex = personSelected.material.emissive.getHex();
						personSelected.material.emissive.setHex(0xff0000);

						this.mapService.GetPath(this.pathAlgorithm, this.listUser.get(this.userId).name, this.listUser.get(personSelected.parent!.name).name).subscribe((dataPath: IPath) => {
							for (var i = 0; i < dataPath.paths.length - 1; i += 1) {
								var outlineName1: string = "";
								var outlineName2: string = "";

								this.listUser.forEach(user => {
									if (user.name == dataPath.paths[i]) {
										outlineName1 = user.id;
									} else if (user.name == dataPath.paths[i + 1]) {
										outlineName2 = user.id;
									}
								});
								console.log(dataPath.paths[i] + " " + dataPath.paths[i + 1]);

								var outline1 = (scene.getObjectByName(outlineName1 + " " + outlineName2));
								var outline2 = (scene.getObjectByName(outlineName2 + " " + outlineName1));
								outline1!.visible = true;
								outline2!.visible = true;
								visibleObjects.push(outlineName1 + " " + outlineName2);
								visibleObjects.push(outlineName2 + " " + outlineName1);
							}
						}, (err: any) => {
							console.log(err);
						});

					}
				} else {
					personSelected.material.emissive.setHex(personColor);
					personSelected = magicBox;
				}
			} else {
				panMovement = true;
			}
		}, true);

		var status: boolean = false;
		var tip: THREE.Object3D<THREE.Event> | undefined;
		var tipSelected: THREE.Object3D<THREE.Event>;
		var objectLoaded: THREE.Object3D<THREE.Event> | undefined;
		renderer.domElement.addEventListener("mousemove", (event) => {
			if (event.buttons == 2) {
				const newMousePosition = new THREE.Vector2(
					event.clientX, screen_height - event.clientY - 1
				);

				const mouseIncrement = newMousePosition.clone().sub(mousePosition);
				mousePosition = newMousePosition;
				if (panMovement) {
					topCamera.position.set(topCamera.position.x + -mouseIncrement.x,
						topCamera.position.y, topCamera.position.z + mouseIncrement.y);
				}
			}

			if (chosenCamera == 2) {
				fpsCamera.updateMatrixWorld();

				// find intersections
				tipRaycaster.setFromCamera(pointer, fpsCamera);
				let tipIntersects = tipRaycaster.intersectObjects(this.objectsList);
				if (tipIntersects.length > 0) {
					if (tipSelected != tipIntersects[0].object) {
						tipSelected = tipIntersects[0].object;
						tip = (scene.getObjectByName(tipSelected.parent!.name + "sprite"));
						tip!.visible = true;
						objectLoaded = (scene.getObjectByName(tipSelected.parent!.name + "avatar"));
						objectLoaded!.visible = true;
						status = true;
					}
				} else {
					if (status == true) {
						tip!.visible = false;
						status = false;
						objectLoaded!.visible = false;
					}
				}
			}
		}, true);

		renderer.domElement.addEventListener("mouseup", (event) => { panMovement = false; }, true);

		renderer.domElement.addEventListener("pointermove", (event) => {
			var rect = renderer.domElement.getBoundingClientRect();

			pointer.x = (event.clientX - rect.left) / rect.width * 2.0 - 1.0;
			pointer.y = -(event.clientY - rect.top) / rect.height * 2.0 + 1.0;
		}, true);

		document.addEventListener('keydown', event => {
			keyStates[event.code] = true;

			if (event.code == "Digit1") {
				chosenCamera = 0;
				orbitControl.enabled = false;
			} else if (event.code == "Digit2") {
				chosenCamera = 1;
				orbitControl.enabled = true;
			} else if (event.code == "Digit3") {
				orbitControl.enabled = false;
				chosenCamera = 2;
			} else if (event.code == "KeyF") {
				var elem = document.getElementById('renderCanvas');
				if (elem?.requestFullscreen) {
					elem.requestFullscreen();
				}
			}
		});

		document.addEventListener('keyup', (event) => {
			keyStates[event.code] = false;
		});

		document.addEventListener('fullscreenchange', event => {
			/*
				renderer = new THREE.WebGLRenderer({
					canvas: this.canvas,
					alpha: true,    // transparent background
					antialias: true // smooth edges
				});
				var canvas2 = document.getElementById('renderCanvas');
				this.renderer.setSize(canvas2!.clientWidth, canvas2!.clientHeight);
				var canvas2 = document.getElementById('test');
				this.renderer.setSize(canvas2!.clientWidth, canvas2!.clientHeight);
				console.log("fix me");
			*/
		}, false);

		/* GRAPH */
		/* ZONA PROTEGIDA */
		this.mapService.GetAllUser().subscribe((dataUser: IUser[]) => {
			dataUser.forEach(element => {
				players.push(Object.values(element)[0]);
				this.listUser.set(Object.values(element)[0], element);
			});

			let person = this.makePerson(0, 0, 0, 100, this.listUser.get(this.userId).tags.length, this.listUser.get(this.userId).name, this.listUser.get(this.userId).mood, Math.random() * 0xffffff, moodObjects);
			person.name = "" + this.gui;
			collidableMeshList.push(person);
			scene.add(person);

			this.mapService.GetAllRelationships().subscribe(
				(dataRelationship: IRelationship[]) => {
					dataRelationship.forEach(element => { relationships.push(Object.values(element.userFrom)[0] + "<>" + Object.values(element.userTo)[0] + "<>" + element.connectionStrength); });

					players.forEach(player => this.addNode(player));
					relationships.forEach(route => this.addEdge(route.split("<>")[0], route.split("<>")[1]));
					this.bfs(this.userId, scene, collidableMeshList, moodObjects);

					relationships.forEach(route => {
						var player1 = (scene.getObjectByName(route.split("<>")[0]));
						var player2 = (scene.getObjectByName(route.split("<>")[1]));

						var point1 = new THREE.Vector3(player1?.position.x, player1?.position.y, player1?.position.z);
						var point2 = new THREE.Vector3(player2?.position.x, player2?.position.y, player2?.position.z);

						let pathBetweenTwoPlayers = new THREE.LineCurve3(point2, new THREE.Vector3((point1.x + point2.x) / 2, (point2.y + point1.y) / 2, (point2.z + point1.z) / 2));
						var relationshipStrengthValue: number = +route.split("<>")[2];
						let tubeGeometry = new THREE.TubeGeometry(pathBetweenTwoPlayers, 10, relationshipStrengthValue, 10, false);
						let material2 = new THREE.MeshLambertMaterial({ color: relationshipStrengthValue == 1 ? 0xff9999 : (relationshipStrengthValue == 2 ? 0xb3ffb3 : 0xb3b3ff) });

						let tubeGeometry2 = new THREE.TubeGeometry(pathBetweenTwoPlayers, 10, relationshipStrengthValue + 1, 10, false);
						let mesh = new THREE.Mesh(tubeGeometry, material2);

						mesh.castShadow = true;
						mesh.receiveShadow = true;
						scene.add(mesh);
						collidableMeshList.push(mesh);

						var outlineMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff, side: THREE.BackSide });
						var outlineMesh = new THREE.Mesh(tubeGeometry2, outlineMaterial);
						outlineMesh.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
						outlineMesh.scale.multiplyScalar(1.0);
						outlineMesh.visible = false;
						outlineMesh.castShadow = true;
						outlineMesh.receiveShadow = true;
						outlineMesh.name = route.split("<>")[0] + " " + route.split("<>")[1];
						scene.add(outlineMesh);
					});
				}, (err: any) => {
					console.log(err);
				}
			)
		}, (err: any) => {
			console.log(err);
		});
		/* FIM DE ZONA PROTEGIDA */

		const fpsControlKeyboard = function () {
			var delta = clock.getDelta(); // seconds.
			var moveDistance = 200 * delta; // 200 pixels per second
			var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
			var cloneCamera = fpsCamera.clone(true);

			if (keyStates['KeyW']) {
				cloneCamera.translateZ(-moveDistance);
			}
			if (keyStates['KeyS']) {
				cloneCamera.translateZ(moveDistance);
			}
			if (keyStates['KeyA']) {
				cloneCamera.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
			}
			if (keyStates['KeyD']) {
				cloneCamera.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
			}
			if (keyStates['KeyQ']) {
				cloneCamera.translateX(-moveDistance);
			}
			if (keyStates['KeyE']) {
				cloneCamera.translateX(moveDistance);
			}
			if (keyStates['KeyP']) {
				cloneCamera.translateY(moveDistance);
			}
			if (keyStates['KeyL']) {
				cloneCamera.translateY(-moveDistance);
			}

			var worldDirection = new THREE.Vector3();
			cloneCamera.getWorldDirection(worldDirection);
			worldDirection.normalize();
			collisionRaycaster.camera = cloneCamera;
			collisionRaycaster.set(cloneCamera.position, worldDirection);
			let collisionIntersects = collisionRaycaster.intersectObjects(collidableMeshList, true);

			if (collisionIntersects.length > 0 && collisionIntersects[0].distance < 20) {
				console.log("hit object!!!");
			} else {
				fpsCamera.position.copy(cloneCamera.position);
				fpsCamera.quaternion.copy(cloneCamera.quaternion);
			}
		}

		const animate = function () {
			requestAnimationFrame(animate);

			var mapWidth: number = 240;
			var mapHeight: number = 160;

			var w = screen_width, h = screen_height;

			renderer.setViewport(0, 0, w, h);
			renderer.clear();

			if (chosenCamera == 0) {
				topCamera.add(solidarityLight.target);
				solidarityLight.target.position.set(0, 0, -1);
				solidarityLight.position.copy(topCamera.position);

				orbitControl.enabled = false;
				renderer.render(scene, topCamera);
			} else if (chosenCamera == 1) {
				orbitCamera.add(solidarityLight.target);
				solidarityLight.target.position.set(0, 0, -1);
				solidarityLight.position.copy(orbitCamera.position);

				orbitControl.enabled = true;
				renderer.render(scene, orbitCamera);
			} else if (chosenCamera == 2) {
				fpsControlKeyboard();

				fpsCamera.add(solidarityLight.target);
				solidarityLight.target.position.set(0, 0, -1);
				solidarityLight.position.copy(fpsCamera.position);

				orbitControl.enabled = false;
				renderer.render(scene, fpsCamera);
			}

			moodObjects.forEach(element => {
				element.rotateY(0.05);
			});

			//renderer.setViewport(0, 0, mapWidth, mapHeight);
			renderer.setViewport(screen_width - mapWidth, 0, mapWidth, mapHeight);
			renderer.render(scene, mapCamera);

			//renderer.setViewport(screen_width - mapWidth, mapHeight, mapWidth, screen_height - mapHeight);
			statistics.update();
		};

		//LOAD MINIMAP
		animate();
	}

	public colorCallback(object: any, color: any) {
		object.color.set(color);
	}

	public createUserInterface(ambientLightAtual: THREE.AmbientLight,
		pointLightAtual1: THREE.PointLight, pointLightAtual2: THREE.PointLight,
		solidarityLightAtual: THREE.SpotLight, helperGroup: THREE.Group): void {
		// Create the graphical user interface
		this.gui = new GUI({
			hideable: false
		});

		// Create the lights folder
		const lightsFolder = this.gui.addFolder('Lights');

		// Create the ambient light folder
		const ambientLightFolder = lightsFolder.addFolder('Ambient light');
		const ambientLight = ambientLightAtual;
		const ambientColor = { color: '#' + new THREE.Color(ambientLight.color).getHexString() };
		ambientLightFolder.add(ambientLight, 'visible').listen();
		ambientLightFolder.addColor(ambientColor, 'color').onChange(color => this.colorCallback(ambientLight, color));
		ambientLightFolder.add(ambientLight, 'intensity', 0.0, 1.0, 0.01);

		// Create the point light folder
		const pointLightFolder = lightsFolder.addFolder('Point light');
		const pointLight1 = pointLightAtual1;
		const pointLight2 = pointLightAtual2;
		const pointLight1Folder = pointLightFolder.addFolder('Point light 1');
		const pointColor1 = { color: '#' + new THREE.Color(pointLight1.color).getHexString() };
		pointLight1Folder.add(pointLight1, 'visible').listen();
		pointLight1Folder.addColor(pointColor1, 'color').onChange(color => this.colorCallback(pointLight1, color));
		pointLight1Folder.add(pointLight1, 'intensity', 0.0, 1.0, 0.01);
		pointLight1Folder.add(pointLight1.position, 'x', -10.0, 10.0, 0.01);
		pointLight1Folder.add(pointLight1.position, 'y', 0.0, 20.0, 0.01);
		pointLight1Folder.add(pointLight1.position, 'z', -10.0, 10.0, 0.01);
		const pointColor2 = { color: '#' + new THREE.Color(pointLight2.color).getHexString() };
		const pointLight2Folder = pointLightFolder.addFolder('Point light 2');
		pointLight2Folder.add(pointLight2, 'visible').listen();
		pointLight2Folder.addColor(pointColor2, 'color').onChange(color => this.colorCallback(pointLight2, color));
		pointLight2Folder.add(pointLight2, 'intensity', 0.0, 1.0, 0.01);
		pointLight2Folder.add(pointLight2.position, 'x', -10.0, 10.0, 0.01);
		pointLight2Folder.add(pointLight2.position, 'y', 0.0, 20.0, 0.01);
		pointLight2Folder.add(pointLight2.position, 'z', -10.0, 10.0, 0.01);

		// Create the spotlight folder
		const spotLightFolder = lightsFolder.addFolder('Solidarity light');
		const solidaryLight = solidarityLightAtual;
		const solidaryColor = { color: '#' + new THREE.Color(solidaryLight.color).getHexString() };
		spotLightFolder.add(solidaryLight, 'visible').listen();
		spotLightFolder.addColor(solidaryColor, 'color').onChange(color => this.colorCallback(solidaryColor, color));
		spotLightFolder.add(solidaryLight, 'intensity', 0.0, 2.0, 0.01);
		spotLightFolder.add(solidaryLight, 'angle', 0.0, 1, 0.01);
		spotLightFolder.add(solidaryLight, 'penumbra', 0.0, 1, 0.01);

		// Create folder for choosing a path
		const pathNameList = {
			'Shorter': 0,
			'Strongest': 1,
			'A*': 2,
			'A* (FL+FR)': 3,
			'A* (FL+FR+Moods)': 4
		};

		/*aStar  --> Considera FL
aStar_Multicriterio--> Considera FL+FR
aStar_Multicriterio_Mood --> Considera FL+FR+Moods */

		const guiData = {
			pathAlgoName: pathNameList['Shorter'],
		};

		const pathFolder = this.gui.addFolder('Paths');
		pathFolder.add(guiData, 'pathAlgoName', pathNameList).name('Choose a path:').onFinishChange(() => {
			this.pathAlgorithm = guiData.pathAlgoName;
		});

		// Create folder for Visual Helper
		const helpFolder = this.gui.addFolder('Visual Helper');
		helpFolder.add(helperGroup, 'visible').listen();

		// Create folder for audio player
		const audioFolder = this.gui.addFolder("Audio Player");
		const obj = {
			functionViewChange: () => { }
		};
		audioFolder.add(obj, 'functionViewChange').name('Play/Stop audio player').onChange(() => {
			if (this.audio.context.state === 'running') {
				this.audio.context.suspend();
			} else if (this.audio.context.state === 'suspended') {
				this.audio.context.resume();
			}
		});
		audioFolder.add(obj, 'functionViewChange').name('volume up').onChange(() => {
			let atual = this.audio.getVolume();
			this.audio.setVolume(atual + 0.1 > 1 ? 1 : atual + 0.1);
		});
		audioFolder.add(obj, 'functionViewChange').name('volume down').onChange(() => {
			let atual = this.audio.getVolume();
			this.audio.setVolume(atual - 0.1 < 0 ? 0 : atual - 0.1);
		});
	}

	public makePerson(positionX: number, positionY: number, positionZ: number,
		labelWidth: number, headSize: number, name: string, mood: string, bodyColor: number,
		moodObjects: THREE.Object3D<THREE.Event>[]) {
		let bodyRadiusTop = 2.4;
		let bodyRadiusBottom = 4.2;
		let bodyHeight = 8;
		let bodyRadialSegments = 24;

		let bodyGeometry = new THREE.CylinderGeometry(
			bodyRadiusTop, bodyRadiusBottom, bodyHeight, bodyRadialSegments);

		headSize = (headSize > 10 ? 10 : (headSize <= 0) ? 1 : headSize);

		let headRadius = bodyRadiusTop * (2.8 + headSize / 3);
		let headLonSegments = 48;
		let headLatSegments = 120;
		let headGeometry = new THREE.SphereGeometry(
			headRadius, headLonSegments, headLatSegments);

		let bodyMaterial = new THREE.MeshPhongMaterial({
			color: bodyColor,
			flatShading: true,
		});

		let bodyParts = new THREE.Group();
		bodyParts.position.x = positionX;
		bodyParts.position.y = positionY;
		bodyParts.position.z = positionZ;

		let body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		bodyParts.add(body);
		body.position.y = bodyHeight / 2;

		let head = new THREE.Mesh(headGeometry, bodyMaterial);
		bodyParts.add(head);
		head.position.y = bodyHeight + headRadius * 1.1;


		let canvas = this.makeLabelCanvas(750, 250, name);
		let texture = new THREE.CanvasTexture(canvas);
		// because our canvas is likely not a power of 2
		// in both dimensions set the filtering appropriately.
		texture.minFilter = THREE.LinearFilter;
		texture.wrapS = THREE.ClampToEdgeWrapping;
		texture.wrapT = THREE.ClampToEdgeWrapping;

		let labelMaterial = new THREE.SpriteMaterial({
			map: texture,
			transparent: true
		});

		// if units are meters then 0.01 here makes size
		// of the label into centimeters.
		const labelBaseScale = 0.04;
		const label = new THREE.Sprite(labelMaterial);
		bodyParts.add(label);
		//label.position.y = head.position.y + 10 + headRadius + headSize * labelBaseScale;
		label.position.y = head.position.y + 5 + headRadius + headSize * labelBaseScale;
		//label.position.x = head.position.x + 10;

		label.scale.x = canvas.width * labelBaseScale;
		label.scale.y = canvas.height * labelBaseScale;

		bodyParts.receiveShadow = true;
		bodyParts.castShadow = true;


		var moodGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
		var moodTexture = new THREE.TextureLoader().load(
			'../../assets/textures/MoodTexture/' + mood + '.png');
		var moodMaterial = new THREE.MeshLambertMaterial({
			map: moodTexture, transparent: true
		});

		moodMaterial.side = THREE.DoubleSide;

		var moodMesh = new THREE.Mesh(moodGeometry, moodMaterial);
		moodMesh.position.y = head.position.y + 15 + headRadius + headSize * labelBaseScale;
		bodyParts.add(moodMesh);
		moodObjects.push(moodMesh);

		return bodyParts;
	}

	public makeLabelCanvas(baseWidth: number, size: number, name: string) {
		let borderSize = 5;
		var ctx = document.createElement('canvas').getContext('2d');
		var font = `${size}px bold sans-serif`;
		ctx!.font = font;
		// measure how long the name will be
		let textWidth = ctx!.measureText(name).width;

		let doubleBorderSize = borderSize * 2;
		let width = baseWidth + doubleBorderSize;
		let height = size + doubleBorderSize;
		ctx!.canvas.width = width;
		ctx!.canvas.height = height;

		// need to set font again after resizing canvas
		ctx!.font = font;
		ctx!.textBaseline = 'middle';
		ctx!.textAlign = 'center';

		//ctx!.fillStyle = 'red';

		var my_gradient = ctx!.createLinearGradient(0, 0, 0, 170);

		ctx!.fillStyle = my_gradient;

		// scale to fit but don't stretch
		let scaleFactor = Math.min(1, baseWidth / textWidth);
		ctx!.translate(width / 2, height / 2);
		ctx!.scale(scaleFactor, 1);
		ctx!.fillStyle = 'white';
		ctx!.fillText(name, 0, 0);

		return ctx!.canvas;
	}

	public makeFullTipLabel(name: string, email: string, linkedin: string, facebook: string, mood: string) {
		// create a canvas element
		let canvas1 = document.createElement('canvas');
		let context1 = canvas1.getContext('2d');

		let tamanho = name.length

		if (tamanho < ("Name: " + email).length) {
			tamanho = ("Name: " + email).length;
		}
		if (tamanho < ("Linkedin: " + email).length) {
			tamanho = ("Linkedin: " + email).length;
		}
		if (tamanho < ("Facebook: " + email).length) {
			tamanho = ("Facebook: " + email).length;
		}
		if (tamanho < ("Mood: " + email).length) {
			tamanho = ("Mood: " + email).length;
		}

		let maxSize: number = Math.round(5.747126437 * tamanho);

		let font = `250px bold sans-serif`;
		context1!.font = font;

		context1!.canvas.width = maxSize;
		context1!.canvas.height = 55;

		context1!.fillStyle = "rgba(255,99,71,0.95)"; // black border
		context1!.fillRect(0, 0, maxSize, 55 + 2);
		context1!.fillStyle = "rgba(0,125,255,1)"; // white filler
		context1!.fillRect(4, 2, maxSize - 8, 51);
		context1!.fillStyle = "rgba(255,255,255,1)"; // text color
		context1!.fillText("Name: " + name, 10, 10);
		context1!.fillText("Email: " + email, 10, 20);
		context1!.fillText("Linkedin: " + linkedin, 10, 30);
		context1!.fillText("Facebook: " + facebook, 10, 40);
		context1!.fillText("Mood: " + mood, 10, 50);


		// canvas contents will be used for a texture
		var texture1 = new THREE.Texture(canvas1)
		texture1.needsUpdate = true;

		var spriteMaterial = new THREE.SpriteMaterial({ map: texture1 });

		var sprite1 = new THREE.Sprite(spriteMaterial);

		//sprite1.scale.set(200, 100, 1.0); // 0.25, 0.5
		sprite1.scale.x = context1!.canvas.width * 0.25;
		sprite1.scale.y = context1!.canvas.height * 0.5;
		sprite1.scale.set(context1!.canvas.width * 2, context1!.canvas.height * 2, 0.5);
		sprite1.position.set(-250, 100, 0);
		sprite1.visible = false;
		return sprite1;
	}

	public makeShortTipLabel(name: string, tags: Array<string>, avatar: string) {
		// create a canvas element
		let canvas1 = document.createElement('canvas');
		let context1 = canvas1.getContext('2d');
		context1!.font = "Bold 10px Arial";
		context1!.fillStyle = "rgba(0,0,0,0.95)";

		// canvas contents will be used for a texture
		let texture1 = new THREE.Texture(canvas1)

		var spriteMaterial = new THREE.SpriteMaterial({ map: texture1 });

		let sprite1 = new THREE.Sprite(spriteMaterial);
		sprite1.scale.set(200, 100, 1.0);

		var message = "--------Nome: " + name + "--------";
		var msgSize = context1!.measureText(message);
		var width = msgSize.width;

		let i = 0;
		let ii = 0;
		while (i < tags.length) {
			var temp = tags.slice(i, Math.min(i + 3, tags.length));
			var msgSizeTemp = context1!.measureText(temp.toString());
			if (msgSizeTemp.width > width) {
				width = msgSizeTemp.width;
			}
			i += 3;
			ii++;
		}

		context1!.fillStyle = "rgba(255,204,255,0.95)"; // black border
		context1!.fillRect(0, 0, width + 8, 15 + (ii * 10) + 20 + 8);
		context1!.fillStyle = "rgba(255,255,255,0.95)"; // white filler
		context1!.fillRect(2, 2, width + 4, 15 + (ii * 10) + 20 + 4);
		context1!.fillStyle = "rgba(0,0,0,1)"; // text color
		context1!.fillText(message, 4, 20);
		context1!.fillText(" Tags:", 4, 30);

		i = 0;
		ii = 0;
		while (i < tags.length) {
			var temp = tags.slice(i, Math.min(i + 3, tags.length));
			var msgSizeTemp = context1!.measureText(temp.toString());
			context1!.fillText(temp.toString(), 20, 20 + (ii * 10) + 20);
			i += 3;
			ii++;
		}

		texture1.needsUpdate = true;
		sprite1.visible = false;

		return sprite1;
	}

	//Graph methods
	public addNode(player: string) {
		this.adjacencyList.set(player, []);
	}

	public addEdge(origin: string, destination: string) {
		this.adjacencyList.get(origin).push(destination);
		this.adjacencyList.get(destination).push(origin);
	}

	public bfs(start: string, scene: THREE.Scene, collidableMeshList: THREE.Object3D<THREE.Event>[],
		moodObjects: THREE.Object3D<THREE.Event>[]) {
		const visited = new Set();
		const queue = [start];
		let base = 0;
		let tamanho = 0;
		const r = 100; // Radius
		while (queue.length > 0) {
			const airport = queue.shift(); // mutates the queue
			const destinations = this.adjacencyList.get(airport);
			tamanho = visited.size;

			let numberOfFriends: Array<number> = [];
			let idOfFriends: Array<string> = [];
			for (const destination of destinations) {
				if (!visited.has(destination)) {
					if (destination != start) {
						let amigos = 0;
						for (const temp of this.adjacencyList.get(destination)) {
							if (temp != destination) {
								amigos++;
							}
						}

						numberOfFriends.push(amigos);
						idOfFriends.push(destination);
					}

					visited.add(destination);
					queue.push(destination);
				}
			}

			if (visited.size > tamanho) {
				var ratio = Math.max(...numberOfFriends) / 20;
				numberOfFriends = numberOfFriends.map(v => Math.round(v / ratio));

				const n = numberOfFriends.length;

				const x0 = 0; // Center abscissa
				const y0 = 0; // Center ordinate

				let angleIncrement = (2.0 * Math.PI) / n;
				let angle = 0.0;

				for (let i = 0; i < n; i++) {
					let x = (r + (base * 50)) * Math.cos(angle) + x0;
					let z = (r + (base * 50)) * Math.sin(angle) + y0;

					x.toFixed(4);
					z.toFixed(4);

					angle += angleIncrement;
					let person0 = this.makePerson(x, 50 + (base * 50) + numberOfFriends[i], z, 300, this.listUser.get(idOfFriends[i]).tags.length, this.listUser.get(idOfFriends[i]).name, this.listUser.get(idOfFriends[i]).mood, Math.random() * 0xffffff, moodObjects);
					collidableMeshList.push(person0);
					person0.name = idOfFriends[i];
					scene.add(person0);

					// model
					const onProgress = function (xhr: any) {
						if (xhr.lengthComputable) {
							const percentComplete = xhr.loaded / xhr.total * 100;
							//console.log(Math.round(percentComplete) + '% downloaded');
						}
					};

					const onError = function () { };
					const manager = new THREE.LoadingManager();
					manager.addHandler(/\.dds$/i, new DDSLoader.DDSLoader());
					let avatarUser = this.listUser.get(idOfFriends[i]).avatar;
					new MTLLoader.MTLLoader(manager)
						.setPath('../../assets/obj/' + avatarUser + '/')
						.load(avatarUser + '.mtl', function (materials: any) {
							materials.preload();
							new OBJLoader.OBJLoader(manager)
								.setMaterials(materials)
								.setPath('../../assets/obj/' + avatarUser + '/')
								.load(avatarUser + '.obj', function (object: any) {
									object.position.set(person0.position.x, person0.position.y - 50, person0.position.z);
									scene.add(object);
									object.scale.set(0.25, 0.25, 0.25);
									if (avatarUser === "Male" || avatarUser === "Female") {
										//object.rotation.x = -(Math.PI / 2);
									} else if (avatarUser === "Droid") {
										object.scale.set(8, 8, 8);
									} else {
										object.rotation.x = -(Math.PI / 2);
									}
									object.name = idOfFriends[i] + "avatar";
									object.visible = false;
								}, onProgress, onError);

						});

					var sprite = this.makeShortTipLabel(this.listUser.get(idOfFriends[i]).name, this.listUser.get(idOfFriends[i]).tags, "male");

					sprite.position.set(person0.position.x + 40, person0.position.y, person0.position.z);
					sprite.name = idOfFriends[i] + "sprite";
					sprite.visible = false;

					scene.add(sprite);
					this.objectsList.push(person0);
					this.objectsTip.push(sprite);
				}

				base++;
			}
		}
	}
}