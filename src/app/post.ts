export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(title: string, loveIts: number, content: string) {
        this.title = title;
        this.loveIts = loveIts;
        this.content = content;
        this.createdAt = new Date();
    }
}