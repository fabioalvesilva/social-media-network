import * as sinon from 'sinon';
import { expect } from 'chai';
import { Response, Request, NextFunction } from 'express';
import { Container } from 'typedi';
import config from "../../../config";
import IPostDTO from "../../../src/dto/IPostDTO";
import IPostRepo from "../../../src/services/IRepos/IPostRepo";
import { Result } from '../../../src/core/logic/Result';
import { Post } from '../../../src/domain/post';
import { UniqueEntityID } from '../../../src/core/domain/UniqueEntityID';
import PostService from '../../../src/services/postService';

describe('Comment Controller', function () {
	let mock1;

	/*beforeEach(function () {

		//Post
		let postDTO: IPostDTO = {
			text: "Comment test",
			date: "1950-01-01",
			userId: "0000-0000-0000-0000",
			author: "Author test"
		} as IPostDTO;

		let postRepoClass = require("../" + config.repos.post.path).default;
		let postRepoInstance = Container.get(postRepoClass)


		let post: Post = Post.create(postDTO, new UniqueEntityID("id1")).getValue();

		this.mock1 = sinon.stub(postRepoInstance as IPostRepo, 'save').resolves(new Result<Post>(true, null, post).getValue());

		Container.set(config.repos.post.name, postRepoInstance);
	});


	it('createPost: returns json with post values', async function () {

		let req: Partial<Request> = {};
        let res: Partial<Response> = {
            status: sinon.stub(),
            json: sinon.stub()
        };

		(res.status as sinon.SinonStub).returnsThis();

		let next: Partial<NextFunction> = () => { };

		let postExpectedDTO: IPostDTO = {
			text: "Comment test",
			date: "1950-01-01",
			userId: "0000-0000-0000-0000",
			author: "Author test"
		} as IPostDTO;

		const srv = new PostService(Container.get(config.repos.post.name));

		let result: IPostDTO = await (await srv.createPost(postExpectedDTO)).getValue();


		expect(result.id).to.equal(postExpectedDTO.id);
	});

	afterEach(function () {
		this.mock1.restore();
	});*/
});
