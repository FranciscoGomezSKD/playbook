
class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorersInNode)
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorersInNode.length)
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.githubUsername);
        console.log(usernamesInNode)
    }
}


module.exports = ExplorerService;

// Aplicación del ExplorerService sobre la lista de explorers
/*ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");*/