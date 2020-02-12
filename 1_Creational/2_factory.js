class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberShipFactory {

    static getMemberList(type) {
        const memberList = {
            simple: SimpleMemberShip,
            standard: StandardMemberShip,
            premium: PremiumMemberShip,
        };

        return memberList[type];
    }

    create(name, type = 'simple') {
        const MemberShip = MemberShipFactory.getMemberList(type);
        const member = new MemberShip(name);

        member.type = type;
        member.define = function() {
            console.log('---', `${this.name} (${this.type}): ${this.cost}`);
        };

        return member;
    }
}

const memberFactory = new MemberShipFactory();

const members = [
    memberFactory.create('Vasya', 'simple'),
    memberFactory.create('Vasya', 'standard'),
    memberFactory.create('Vasya', 'premium'),
    memberFactory.create('Vasya'),
];

console.log('---members', members.forEach(m => m.define()));
