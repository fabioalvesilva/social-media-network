import { expect } from 'chai';
import { Post } from '../../../src/domain/post';
import IPostDTO from '../../../src/dto/IPostDTO';

describe('Create a valid Post', () => {

    let post = Post.create({
            text: "Teste",
            date: "Teste",
            userId: "Teste",
            author: "Teste"
        } as IPostDTO);

    it("ensure all Parameters are well formed", () => {
        expect(post.getValue().text).to.equal("Teste");
    });
});

describe('Create an invalid Post - Text is null', () => {

    let post = Post.create({
        text: null,
        date: "1950-12-11",
        userId: "Teste",
        author: "Teste"
    } as IPostDTO);

    it("ensure it fails with an invalid post", () => {
        expect(post.error).to.equal("Must insert some information in the post");
    });
});

