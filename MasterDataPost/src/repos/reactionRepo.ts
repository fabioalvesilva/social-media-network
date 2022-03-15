import { Service, Inject } from 'typedi';
import { Result } from '../core/logic/Result';
import { Document, FilterQuery, Model } from 'mongoose';
import IReactionRepo from '../services/IRepos/IReactionRepo';
import { IReactionPersistence } from '../dataschema/IReactionPersistence';
import { Reaction } from '../domain/reaction';
import { ReactionId } from '../domain/reactionId';
import { ReactionMap } from '../mappers/ReactionMap';
import  IReactionDTO  from '../dto/IReactionDTO';
import { IPostPersistence } from '../dataschema/IPostPersistence';
import { PostMap } from '../mappers/PostMap';

@Service()
export default class ReactionRepo implements IReactionRepo {
    private models: any;

    constructor(
        @Inject('reactionSchema') private reactionSchema: Model<IReactionPersistence & Document>,
        @Inject('postSchema') private postSchema: Model<IPostPersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async exists(reaction: Reaction): Promise<boolean> {

        const idX = reaction.id instanceof ReactionId ? (<ReactionId>reaction).id.toValue() : reaction.id;

        const query = { domainId: idX };
        const commentDocument = await this.reactionSchema.findOne(query as FilterQuery<IReactionPersistence & Document>);

        return !!commentDocument === true;
    }

    public async save(reaction: Reaction): Promise<Reaction> {
        const query = { domainId: reaction.id.toString() };

        const reactionDocument = await this.reactionSchema.findOne(query);

        try {
            if (reactionDocument === null) {
                const rawComment: any = ReactionMap.toPersistence(reaction);

                const reactionCreated = await this.reactionSchema.create(rawComment);

                return ReactionMap.toDomain(reactionCreated);
            } else {
                reactionDocument.date = reaction.date;
                reactionDocument.reaction = reaction.reaction;
                await reactionDocument.save();

                return reaction;
            }
        } catch (err) {
            throw err;
        }
    }

    public async findAll(): Promise<Result<IReactionDTO[]>> {

        let document = []
        document = await this.reactionSchema.find().sort({ date: 1 });
        var posts = [];

        for (var i = 0; i < document.length; i++) {
            posts.push(ReactionMap.toDTO(document[i]));
        }

        if (document === null) {
            return Result.fail<Array<IReactionDTO>>('No Posts found!');
        } else {
            return Result.ok<Array<IReactionDTO>>(posts);
        }
    }

    public async findByDomainId(reactionId: ReactionId| string): Promise<Reaction> {
        const query = { domainId: reactionId };
        const reactionRecord = await this.reactionSchema.findOne(query as FilterQuery<IReactionPersistence & Document>);

        if (reactionRecord != null) {
            return ReactionMap.toDomain(reactionRecord);
        }
        else
            return null;
    }

    public async findByCompoundId(uId: string, oType: number, oId: string): Promise<Reaction> {
        const query = { userId: uId, objectType: oType, objectId: oId };

        const reactionRecord = await this.reactionSchema.findOne(query as FilterQuery<IReactionPersistence & Document>);

        if (reactionRecord != null) {
            return ReactionMap.toDomain(reactionRecord);
        }
        else
            return null;
    }

    public async findCommentsByPost(postId: string): Promise<Result<IReactionDTO[]>> {

        const query = { postId: postId };
        let document = []
        document = await this.reactionSchema.find(query as FilterQuery<IReactionPersistence & Document>).sort({ date: -1 });

        var reactions = [];

        for (var i = 0; i < document.length; i++) {
            reactions.push(ReactionMap.toDTO(document[i]));
        }

        if (document === null) {
            return Result.fail<Array<IReactionDTO>>('No comments found!');
        } else {
            return Result.ok<Array<IReactionDTO>>(reactions);
        }
    }

    public async totalLikes (oId: string): Promise<Result<Number>> {

        let count = await this.reactionSchema.countDocuments({ reaction: 1, objectId: oId });

        if (count === null) {
            return Result.fail<Number>('No reactions found!');
        } else {
            return Result.ok<Number>(count);
        }
    }

    public async totalDislikes(oId: string): Promise<Result<Number>> {
        let count = await this.reactionSchema.countDocuments({ reaction: -1, objectId: oId });
        if (count === null) {
            return Result.fail<Number>('No reactions found!');
        } else {
            return Result.ok<Number>(count);
        }
    }

    public async calcRelationStrength(userFrom: string, userTo: string): Promise<Result<Number>> {

        let relationStrength = 0;

        let postsDocs = [];
        postsDocs= await this.postSchema.find({ userId: userFrom });

        let reactionsDocs = [];
        reactionsDocs = await this.reactionSchema.find({ userId: userTo });

        var postsDTO = [];
        var reactionsDTO = [];

        postsDocs.forEach(p => {
            postsDTO.push(PostMap.toDTO(p))
        })

        reactionsDocs.forEach(r => {
            reactionsDTO.push(ReactionMap.toDTO(r))
        })

        postsDTO.forEach(p => {
            reactionsDTO.forEach(r => {
                if (p.id == r.objectId) {
                    relationStrength = relationStrength + r.reaction;
                }
            })
        })

        return Result.ok<Number>(relationStrength);
    }
}