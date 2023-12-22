import { ProfileHighestEducationEnum, ProfileTitleEnum } from "../api/models"

export interface RegistrationStep {
    key: string
    prompt: string
    values: Array<string>
}

export class NAryNode {
    data: RegistrationStep
    parent: NAryNode | null
    children: Array<NAryNode>
    constructor(data: RegistrationStep) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

export class Tree {
    root: NAryNode
    constructor(data: RegistrationStep) {
        this.root = new NAryNode(data);
    }
}

export const nAryTree = new Tree({
    key: "init",
    prompt: "Are you a student?",
    values: ["Yes", "No"]
});
 
nAryTree.root.children.push(new NAryNode({
    key: "Yes",
    prompt: "Which level are you studying on?",
    values: [
        ProfileHighestEducationEnum.BachelorsDegree,
        ProfileHighestEducationEnum.MastersDegree,
        ProfileHighestEducationEnum.DoctoralDegree,
        ProfileHighestEducationEnum.Diploma,
        ProfileHighestEducationEnum.Other
    ]
}));

nAryTree.root.children.push(new NAryNode({
    key: "No",
    prompt: "Which of listed titles best describe your current academic position?",
    values: [
        ProfileTitleEnum.Chancellor,
        ProfileTitleEnum.ViceChancellor,
        ProfileTitleEnum.Director,
        ProfileTitleEnum.HonoraryProfessor,
        ProfileTitleEnum.Professor,
        ProfileTitleEnum.Doctor,
        ProfileTitleEnum.Mr,
        ProfileTitleEnum.Ms,
        ProfileTitleEnum.Other
    ]
}));