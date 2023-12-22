import { ProfileHighestEducationEnum, ProfileTitleEnum } from "../api/models"

export interface RegistrationStep {
    index: Array<string>
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
    index: ["init"],
    key: "isStudying",
    prompt: "Are you currently a student?",
    values: ["Yes", "No"]
});

const firstLevelChild: NAryNode = new NAryNode({
    index: ["Yes", "No"],
    key: "highestEducation",
    prompt: "Which is the highest level of education you've completed so far?",
    values: [
        ProfileHighestEducationEnum.BachelorsDegree,
        ProfileHighestEducationEnum.MastersDegree,
        ProfileHighestEducationEnum.DoctoralDegree,
        ProfileHighestEducationEnum.Diploma,
        ProfileHighestEducationEnum.Other
    ]
})
 
nAryTree.root.children.push(firstLevelChild);

const secondLevelChild: NAryNode = new NAryNode({
    index: [ProfileHighestEducationEnum.DoctoralDegree],
    key: "title",
    prompt: "Which of listed titles best describe your current academic position?",
    values: [
        ProfileTitleEnum.Chancellor,
        ProfileTitleEnum.ViceChancellor,
        ProfileTitleEnum.Director,
        ProfileTitleEnum.HonoraryProfessor,
        ProfileTitleEnum.Professor,
        ProfileTitleEnum.Doctor,
        ProfileTitleEnum.Other
    ]
})

firstLevelChild.children.push(secondLevelChild);

const thirdLevelChild: NAryNode = new NAryNode({
    index: [
        ProfileHighestEducationEnum.MastersDegree,
        ProfileHighestEducationEnum.BachelorsDegree,
        ProfileHighestEducationEnum.Diploma,
        ProfileHighestEducationEnum.Other,
        ProfileTitleEnum.Chancellor,
        ProfileTitleEnum.ViceChancellor,
        ProfileTitleEnum.Director,
        ProfileTitleEnum.HonoraryProfessor,
        ProfileTitleEnum.Professor,
        ProfileTitleEnum.Doctor,
        ProfileTitleEnum.Other
    ],
    key: "primaryInterest",
    prompt: "What field do you want to delve into?",
    values: [
        "Field 1",
        "Field 2",
        "Field 3",
        "Field 4",
        "Field 5",
        "Field 6",
        "Field 7"
    ]
})

secondLevelChild.children.push(thirdLevelChild)

const fourthLevelChild: NAryNode = new NAryNode({
    index: ["any"],
    key: "secondaryInterest",
    prompt: "Would you be happy to be more specific?",
    values: [
        "Field 11",
        "Field 12",
        "Field 13",
        "Field 14",
        "Field 15",
        "Field 16"
    ]
})

thirdLevelChild.children.push(fourthLevelChild)

const fifthLevelChild: NAryNode = new NAryNode({
    index: ["any"],
    key: "tertiaryInterest",
    prompt: "You can contribute to these specific topics or either you can just explore within CollabEd space",
    values: [
        "Field 21",
        "Field 22",
        "Field 23",
        "Field 24",
        "Field 25",
        "Field 26",
        "Field 27",
        "Field 28"
    ]
})

fourthLevelChild.children.push(fifthLevelChild)