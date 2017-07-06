export class Alert {

    constructor() {
        this.DisplayLengthSeconds = 7.0;
        this.FadeoutLengthSeconds = 2.0
    }

    BannerClass: string;
    Title: string;
    Message: string;
    Id: string;

    DisplayLengthSeconds: number;
    FadeoutLengthSeconds: number;
}