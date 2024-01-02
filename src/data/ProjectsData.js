export const ProjectsData = new Map();

ProjectsData.set(0, {
    name: 'employee-onboarding',
    display: 'Employee Onboarding',
    descriptions: [
        'Design and development of end-to-end Employee Onboarding Business Processes and web portal. The suite encompasses New Hire Onboarding, Employee Transfer & Termination.',
        'A customized portal was developed to provide highly personalized user experience.',
        'Check out more info on this project to see the bot feature in preview and an excerpt on how it was built.'],
    techStack: ['agilepoint', 'reactjs', 'redux', 'prime-react', 'bootstrap', 'sql', 'netcore', 'rest', 'NLP', 'machine-learning'],
    highlights: [],
    media: [],
    spotLight: true,
    moreDetails: true,
});

ProjectsData.set(1, {
    name: 'dmca',
    display: 'DMCA (Digital Millenia Copyright Act) Evidence Engine',
    descriptions: ['Engineered and developed DMCA Engine to extract network and billing evidences of copyright violations of retail internet users and deliver the evidences to billing system for notifying the customers.',
        'Event-driven architecture was adopted to achieve seemlessness and efficiency by processing events asychronously by using independent consumers who are destinated to do their assigned responsibilities independently and deliver the results to corresponding systems.'],
    techStack: ['rabbit-mq', 'mass-transit', 'sql', 'netcore', 'rest', 'heat'],
    highlights: [],
    media: [],
    spotLight: true,
    moreDetails: true,
});

ProjectsData.set(2, {
    name: 'moxy',
    display: 'Moxy Decentralized Storage',
    descriptions: ['Developed frontend for blockchain based decentralized storage app Moxy using React JS on Internet Computer Blockchain.',
        'This was for a bounty competition hosted by Dfinity. A non-for-profit blockchain company. We secured a second place.'],
    techStack: ['reactjs', 'redux', 'bootstrap', 'prime-react', 'motoko'],
    highlights: [],
    media: [],
    spotLight: true,
    moreDetails: true,
});

ProjectsData.set(3, {
    name: 'icpxy',
    display: 'ICPxy NFT Explorer & Staking Platform',
    descriptions: ["Designed and developed an 'NFT Staking Platform' application for my friend's project. We hosted it on Internet Computer Blockchain.",
        'Built both Frontend and Backend. Backend was coded in Motoko programming language. Motoko is an open source language built just for writing Canister contract on Internet Computer blockchain.',
        'NFT holders get to earn rewards for staking their Pxy NFTs.',
        'Click More to see insights and the demo of the application in action.'],
    techStack: ['reactjs', 'redux', 'bootstrap', 'prime-react', 'motoko'],
    highlights: [],
    media: [],
    spotLight: true,
    moreDetails: true,
});


ProjectsData.set(4, {
    name: 'nft-generator-platform',
    display: 'ICPxy Interactive NFT Art Generator',
    descriptions: ['Built an NFT generator platform to automatically generate pixel characters based on the assets uploaded.',
        'You just need to tell the quantity and mention the theme. It will generate them all in png format.',
        'There will be some oddities that you can filter through by Rejecting them and Approving which will be sent to a folder of your selection.',
        'Check out the video demos by clicking More.'],
    techStack: ['reactjs', 'redux', 'bootstrap', 'rest', 'sql', 'netcore'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(5, {
    name: 'heartbeat',
    display: 'Company-Wide IT Heartbeat Monitor',
    descriptions: ['Implemented as an innovation project in parttime. We developed an interactive heartbeat monitor for GVTC IT Infrastructure.',
        'The heartbeat will keep track of all the important IT infrastructure components such as IIS, Windows Services, CPU Usage, Server Disk Space and Memory, External Websites, SSL Cert Expirations etc.',
        'It will notify designated admins whenever there some components go down.',
        'Every server which is monitored has a Heartbeat windows agent that will be running and reporting the status every few minutes. These agents sends all the monitor info from its hosting server back to the Heartbeat server.',
        'Check out the demo in action by clicking More button below.'],
    techStack: ['reactjs', 'redux', 'bootstrap', 'rest', 'sql', 'netcore'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(6, {
    name: 'burn-poked',
    display: 'Burn Poked Bot NFTs For 3D Poked Bot NFT',
    descriptions: ["I volunteered to help one of the UK's popular digital artists Jonathan Ball. He created one of the biggest NFT projects in Internet Computer NFT community.",
        "I built a frontend for his project's NFT Burn event. Holders of Poked Bot NFTs can burn their NFTs to get new Mutant 3D Poked NFT.",
        "Click More button below to see the demo video."],
    techStack: ['reactjs', 'redux', 'bootstrap', 'motoko'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(7, {
    name: 'burn-vampires',
    display: 'Burn Vampire NFTs For Ghost NFT Web App',
    descriptions: ['I built a frontend for Vampires NFT Team to burn their NFTs to transform them into Ghost Vampire NFTS.',
        'The frontend is hosted on Internet Computer blockchain',
        "Click More button below to see the demo video."],
    techStack: ['reactjs', 'redux', 'bootstrap', 'motoko'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(8, {
    name: 'rental-bot',
    display: 'Rentals Azure Bot Prototype',
    descriptions: ['A small prototype I built to learn Azure Bot Framework.',
        'Please Click More to see the video of the prototype.'],
    techStack: ['azure', 'azure-bot-framework'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(9, {
    name: 'bizcase',
    display: 'Business Case Approval Workflow',
    descriptions: ['Design and development of Business Case Workflow using AgilePoint BPM and eForms.',
        "Also built a stats engine which will keep a log of bottleneck tasks, user friendly task history, time taken for tasks' completion, and who is holding up the process currently.",
        'Please Click More to see more information on the project including screenshots.'],
    techStack: ['agilepoint', 'javascript', 'css', 'rabbit-mq', 'mass-transit', 'sql', 'netcore', 'rest'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(10, {
    name: 'tiny-workflow-engine',
    display: 'Tiny Workflow Engine',
    descriptions: ['I built this from ground-up for one the projects at work.',
        'We needed a small workflow kind of capability for the application we were developing.',
        'This is a simple workflow engine which is capable of initiating a request, updating, and completing it.',
        'We can add tasks to the request. Update, cancel and complete them.',
        'Configure a notification template, and have them trigger on different events.',],
    link: 'https://github.com/subarbanape/tiny-workflow-engine',
    techStack: ['netcore', 'sql'],
    highlights: [],
    media: [],
});

ProjectsData.set(11, {
    name: 'bundle-promo',
    display: 'Internet Product Promo Package Management Application',
    descriptions: ['Designed and developed an end-to-end Product Offering Management app.',
        'The product manager would use this application to offer new Internet Promotion, Bundles, Products etc.',
        'The application will allow users to drag and drop interactively from existing offerings.',
        'Once prepared, the user can submit the form to initiate the request. This would initiate AgilePoint workflow which will be routed to several departments in the company to get their approval.',
        'Once everything is approved, the Product Manager can publish it which will then be set to offered into Product database.',
        'Click More to see the demo video.'],
    techStack: ['agilepoint', 'aspdotnet', 'javascript', 'telerik', 'sql'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(12, {
    name: 'display-monitor',
    display: 'Customer Feeback Display Monitor',
    descriptions: ['Designed and developed end-to-end display monitor app which displayed recent positive reviews on the Technicians about their service.',
        'This was done in an effort to boost motivation for field technicians.',
        'Click More to see more details'],
    techStack: ['reactjs', 'redux', 'bootstrap', 'netcore', 'sql', 'windows-auth', 'microstrategy'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(13, {
    name: 'product-lifecycle-integration',
    display: 'Product Management Integration Engine',
    descriptions: ['Product Inventory, Customer Surveys & Feedback, Service Orders, Customer Tickets: Sync & Integration Engine',
        'Please Click More to see more information.'],
    techStack: ['rest', 'netcore', 'sql', 'calix', 'ivue', 'heat'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(14, {
    name: 'nft-backup',
    display: 'NFT Canister Backup Tool',
    descriptions: ['Wrote a small tool in Python to backup the canister state on Internet Blockchain'],
    link: 'https://github.com/subarbanape/ic-nft-utils-py-main',
    techStack: ['python', 'motoko'],
    highlights: [],
    media: []
});

ProjectsData.set(15, {
    name: 'contract-lifecycle-management',
    display: 'Contract Bidding & Approval',
    descriptions: ['Designed and developed AgilePoint based Contract Document Approval & Bidding process for one of the electric-utilities company',
        'The application was responsible for enabling supply chain related staffs to iniate a new Contract Approval request. After the contract was approved based on the bidding amout, it will send emails to bidders, bidding happens through emails, eventually the DocuSign request is sent from the app to establish the agreement.',
        'I used data population feature of AgilePoint to extract custom data and create reports. Also, used custom columns feature in the tasks module to display specific columns related to process to help users identify the processes.',
        'Worked with development team in AgilePoint to create an advanced task list feature the out-of-the-box was not sufficient to provide all requirements customers were asking.'],
    techStack: ['agilepoint', 'docusign', 'wcf service'],
    highlights: [],
    media: []
});

ProjectsData.set(16, {
    name: 'convert-1099',
    display: 'Data Converter Web Tool',
    descriptions: ['Designed and developed a data conversion utility to convert transform documents from one form to a different form with variety of options.',
        'We created this a web application since non-technical users will work with this all the time.',
        'Click More to see the screenshots.'],
    techStack: ['reactjs', 'redux', 'bootstrap', 'rest', 'netcore', 'aspose'],
    highlights: [],
    media: [],
    moreDetails: true,
});

ProjectsData.set(17, {
    name: 'leave-request',
    display: 'Leave Request Workflow',
    descriptions: ['Managed a Leave Request and Leave Accrual AgilePoint based application at AgilePoint, userd internally for employees at AgilePoint.'],
    techStack: ['agilepoint', 'javascript', 'css'],
    highlights: [],
    media: []
});

ProjectsData.set(18, {
    name: 'corel-suite-contribution',
    display: 'Vibrance & Image Masking Filter For Corel-Paint',
    descriptions: ["Successfully reverse engineered Adobe's color filter Vibrance and added that feature in Corel Photo Paint application.",
            "Also, helped a colleague in cracking the formula for Image Mask & Density filter too.",
            "Fixed various issues for AI, PSD, CPP file formats when working for Corel-Photo-Paint and Corel-Draw graphics software."],
    techStack: ['c-plusplus', 'color-algorithms'],
    highlights: [],
    media: []
});

ProjectsData.set(19, {
    name: 'code-review-metrics',
    display: 'Code Review Quality Metrics Plugin For Winmerge Tool',
    descriptions: ['Built a code review metrics plugin for open source tool Winmerge.',
    'The tool is used by code-reviewers which aids to provide code-quality score for their developers.'],
    techStack: ['vc-plusplus', 'win-form'],
    highlights: [],
    media: []
});

ProjectsData.set(20, {
    name: 'lock-config-app',
    display: 'Configuration App For Schlage Security Locks',
    descriptions: ['Led long-term development and sustenance of handheld device Lock Configuration Software for Electronic Locks by Schlage using MFC VC++.'],
    techStack: ['vc-plusplus', 'win-form'],
    highlights: [],
    media: []
});

ProjectsData.set(21, {
    name: 'lock-simulator-app',
    display: 'Lock Simulator For Testing Lock Firmwares',
    descriptions: ['Designed and developed end-to-end lock simulator utility using .Net and C++ to aid firmware developers in testing and troubleshooting. Utilized C++ interoperability for communication with legacy software modules.'],
    techStack: ['vc-plusplus', 'win-form'],
    highlights: [],
    media: []
});

export const getProjectByName = (name) => {
    for (let [key, value] of ProjectsData) {
        if (name.toLowerCase() === value.name)
            return value;
    }
}