import { expect } from 'chai';
import { Reaction } from '../../../src/domain/reaction';
import IReactionDTO from '../../../src/dto/IReactionDTO';

describe('Create a valid Reaction', () => {

    let reaction = Reaction.create({
        reaction: 1,
        date: "1950-12-11",
        userId: "0000-0000-0000-0000",
        objectId: "0000-0000-0000-0000",
        objectType: 1
    } as IReactionDTO);

    it("ensure this reaction is a Like", () => {
        expect(reaction.getValue().reaction).to.equal(1);
    });
});


describe('Create a valid Reaction', () => {

    let reaction = Reaction.create({
        reaction: -1,
        date: "1950-12-11",
        userId: "0000-0000-0000-0000",
        objectId: "0000-0000-0000-0000",
        objectType: 1
    } as IReactionDTO);

    it("ensure this reaction is a dislike", () => {
        expect(reaction.getValue().reaction).to.equal(-1);
    });
});

describe('Create a valid Reaction', () => {

    let reaction = Reaction.create({
        reaction: -1,
        date: "1950-12-11",
        userId: "0000-0000-0000-0000",
        objectId: "0000-0000-0000-0000",
        objectType: 1
    } as IReactionDTO);

    it("ensure this is a Post's reaction", () => {
        expect(reaction.getValue().objectType).to.equal(1);
    });
});

describe('Create a valid Reaction', () => {

    let reaction = Reaction.create({
        reaction: -1,
        date: "1950-12-11",
        userId: "0000-0000-0000-0000",
        objectId: "0000-0000-0000-0000",
        objectType: 0
    } as IReactionDTO);

    it("ensure this is a Comment's reaction", () => {
        expect(reaction.getValue().objectType).to.equal(0);
    });
});

describe('Create an invalid Reaction - ObjectType is null', () => {

    let reaction = Reaction.create({
        reaction: 1,
        date: "1950-12-11",
        userId: "0000-0000-0000-0000",
        objectId: "0000-0000-0000-0000",
        objectType: null
    } as IReactionDTO);

    it("ensure it fails with an invalid reaction", () => {
        expect(reaction.error).to.equal("Missing reaction information");
    });
});


