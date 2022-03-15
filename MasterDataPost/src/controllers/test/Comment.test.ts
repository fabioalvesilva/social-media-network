import * as sinon from 'sinon';
import { Response, Request, NextFunction } from 'express';
import { Container } from 'typedi';
import { Result } from '../../core/logic/Result';
import "reflect-metadata";
import CommentController from '../commentController';
import ICommentService from '../../services/IServices/ICommentService';
import { UniqueEntityID } from '../../core/domain/UniqueEntityID';
import CommentService from '../../services/commentService';
import ICommentDTO from "../../dto/ICommentDTO";
import { User } from '../../domain/user';
import { Comment } from '../../domain/comment';

/*describe('Comment Controller', function () {
	beforeEach(function () { });
	const testConnectionForce = 2;

	it('getPosts: returns json with the all posts', async function () {
		const mReq = {
			body: {
				text: 'Comments test', date: '1950-01-01',
				postId: '0000-0000-0000-0000', userId: '0000-0000-0000-0000', author: "Comment's Author"
			}
		} as Request;
		const mRes = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;
		const mNext = sinon.stub();
		let comment = Comment.create({
			text: "Comment's test",
			date: "1950-01-01",
			postId: "0000-0000-0000-0000",
			userId: "0000-0000-0000-0000",
			author: "Comment's Author"
		} as ICommentDTO);
		const stubValue = {
			name: 'StubName',
		};
		let roleSchemaInstance = require("../../persistence/schemas/commentSchema").default;
		Container.set("commentSchema", roleSchemaInstance);

		let roleRepoClass = require("../../repos/commentRepo").default;
		let roleRepoInstance = Container.get(roleRepoClass);
		Container.set("CommentRepo", roleRepoInstance);

		let roleServiceClass = require("../../services/commentService").default;
		let roleServiceInstance = Container.get(roleServiceClass);
		Container.set("CommentService", roleServiceInstance);

		roleServiceInstance = Container.get("CommentService");
		//const createCommentServiceStub = sinon.stub(CommentService, 'createComment').resolves(comment);
		/*const ctrl = new CommentController(createCommentServiceStub as ICommentService);*/
		/*const createUserServiceStub = sinon.stub(roleServiceInstance, 'createComment').returns(Result.ok<number>(testConnectionForce));
		const ctrl = new CommentController(roleServiceInstance as ICommentService);
		const result = await ctrl.createComment(<Request>mReq, <Response>mRes, <NextFunction>mNext);
		/*await ctrl.createComment(mReq, mRes, mNext);*/
		/*comment = Comment.create({
			text: 'Comments test',
			date: '1950-01-01',
			postId: '0000-0000-0000-0000',
			userId: "0000-0000-0000-0000",
			author: "Comment's Author"
		} as ICommentDTO);
		sinon.assert.calledWithExactly(createUserServiceStub, {
			text: 'Comments test', date: '1950-01-01',
			postId: '0000-0000-0000-0000', userId: '0000-0000-0000-0000', author: "Comment's Author"
		});
	});
});*/