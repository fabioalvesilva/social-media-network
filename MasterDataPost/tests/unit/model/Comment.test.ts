import { expect } from 'chai';
import { Comment } from '../../../src/domain/comment';
import ICommentDTO from '../../../src/dto/ICommentDTO';
import config from "../../../config";
import { Result } from '../../../src/core/logic/Result';

describe('Create a valid Comment', () => {

    let comment = Comment.create({
        text: "Comment's test",
        date: "1950-01-01",
        postId: "0000-0000-0000-0000",
        userId: "0000-0000-0000-0000",
        author: "Comment's Author"
    } as ICommentDTO);

    it("ensure all Parameters are well formed", () => {
        expect(comment.getValue().text).to.equal("Comment's test");
    });
});

describe('Create an invalid Comment - Text is null', () => {

    let comment = Comment.create({
        text: null,
        date: "1950-01-01",
        postId: "0000-0000-0000-0000",
        userId: "0000-0000-0000-0000",
        author: "Comment's Author"
    } as ICommentDTO);

    it("ensure it fails with an invalid post", () => {
        expect(comment.error).to.equal("Some information in the comment is missing");
    });
});

describe('Create an invalid Comment - Author is null', () => {

    let comment = Comment.create({
        text: "Invalid Post",
        date: "1950-01-01",
        postId: "0000-0000-0000-0000",
        userId: "0000-0000-0000-0000",
        author: null
    } as ICommentDTO);

    it("ensure it fails with an invalid comment", () => {
        expect(comment.error).to.equal("Some information in the comment is missing");
    });
});

describe('Create an invalid Comment - PostId is null', () => {

    let comment = Comment.create({
        text: "Invalid Post",
        date: "1950-01-01",
        postId: null,
        userId: "0000-0000-0000-0000",
        author: "Comment's Author"
    } as ICommentDTO);

    it("ensure it fails with an invalid comment", () => {
        expect(comment.error).to.equal("Some information in the comment is missing");
    });
});

