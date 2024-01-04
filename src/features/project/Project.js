import React, { useEffect, useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Container, Card, Button, Col, Image, Row } from 'react-bootstrap';
import { CardTopHeaderImage, MainCard, MainCardBody, MainCardTitle, ThemedHyperlink, TitleImage, TitleText } from '../../common/CommonControls';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setParentPathAsync, setPathAsync } from '../path/PathSlice';
import { getBreadCrumbDisplayName } from '../../common/Utils';
import styled from 'styled-components';

export const Project = (item) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { path, source } = useSelector((state) => state.pathSlice || {})
    const { project } = useSelector((state) => state.projectSlice || {})
    const pathArray = path && path.split('/');
    pathArray && pathArray.shift();
    pathArray && pathArray.pop();

    const projectTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={() => {
                dispatch(setParentPathAsync());
                navigate(-1);
            }}>
                {getBreadCrumbDisplayName(item.label)}
            </a>
        );
    };

    let items = pathArray && pathArray.map(item => ({ label: item, url: '', template: projectTemplate }));
    items = [...items, { label: ((project && project.display) || 'na') }]

    const homeTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={() => { dispatch(setPathAsync({ path: '/home' })); }}>
                {item.label}
            </a>
        );
    };

    const home = { label: 'Home', url: '', template: homeTemplate }

    return (
        <Container fluid style={{ padding: '5px' }}>
            <BreadCrumb model={items} home={home} style={{ background: '#b2eb81' }} />
            <MainCard style={{ marginTop: '10px' }}>
                <MainCardBody>
                    {getProjectDisplayCard((project && project.name) || 'na')}
                </MainCardBody>
            </MainCard>
        </Container>
    )
}

const getProjectDisplayCard = (name) => {
    switch (name) {
        case 'employee-onboarding': return <EobProjectDetails />;
        case 'dmca': return <DMCAProjectDetails />;
        case 'moxy': return <MoxyProjectDetails />;
        case 'icpxy': return <PxyProjectDetails />;
        case 'nft-generator-platform': return <NFTGeneratorProjectDetails />;
        case 'heartbeat': return <HeartbeatProjectDetails />;
        case 'burn-poked': return <BurnPokedProjectDetails />;
        case 'burn-vampires': return <BurnVampiresProjectDetails />;
        case 'rental-bot': return <RentalBotProjectDetails />;
        case 'bizcase': return <BizcaseProjectDetails />;
        case 'product-lifecycle-integration': return <ProductLifecycleIntegrationProjectDetails />;
        case 'display-monitor': return <DisplayMonitorProjectDetails />;
        case 'bundle-promo': return <BundlePromoProjectDetails />;
        case 'convert-1099': return <DataConverterProjectDetails />;
    }
}

const TextParagraph = styled.span`
    font-size: xx-large;
    margin: 0;
    padding: 0;
    line-height: normal;
`

const EobProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>EOB Portal Sneak-peak</u>
            </h1>
            <h2>
                Features showcased.
            </h2>
            <p><TextParagraph>1. Login screen.</TextParagraph></p>
            <p><TextParagraph>2. Landing page/Home page with Requests/Tasks dashboard, Bottleneck & Drilldown chart.</TextParagraph></p>
            <p><TextParagraph>3. Interactive Tasks & Requests Page with Timeline GUI, Request Summary (Report View), Process Visuals (Workflow Runtime), and other informative process information.</TextParagraph></p>
            <p><TextParagraph>4. Roles & Authorization.</TextParagraph></p>
            <p><TextParagraph>5. New Hire, Transfer and Separation eforms integration with AgilePoint into Portal.</TextParagraph></p>
            <p><TextParagraph>6. Feedback form.</TextParagraph></p>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/JHdXgfGfSL0" title="EOB Portal Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>
                <u>Bot</u>
            </h1>
            <h2>
                Please watch the video to understand the capabilities of bot.
            </h2>
            <p><TextParagraph>
                We used Microsoft Machine Learning library. Trained the model with a database of questions and intents. Also, besides the intent, we also used Stanford's Natural Language Processing (NLP) library to extract the Parts of Speech (POS) to query against EOB database and respond users for their queries.
            </TextParagraph></p>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/rxoaW2WH0gc" title="Employee Onboarding Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>
                <u>Architecture</u>
            </h1>
            <Image style={{maxWidth: '100%'}} src='../EOB Architecture.png'></Image>
        </div>
    )
}

const DMCAProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Architecture</u>
            </h1>
            <Image style={{maxWidth: '100%'}} src='../DMCA Architecture.png'></Image>
        </div>
    )
}

const MoxyProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>About</u>
            </h1>
            <p><TextParagraph>Moxy Dapp is a prototype to demonstrate Internet Computer's ability to store files/data in a decentralized fashion without any censorships.</TextParagraph></p>
            <p><TextParagraph>The data is stored in the Canister's (Smart Contract) containers. Each canister can store upto 64 GB of space.</TextParagraph></p>
            <p><TextParagraph>My friend, who built the backend, created a distributed file system orchestrator which can scale up/down canisters to make room for more storage space as per the user demands. This sort of creates an unbounded storage container. Ofcourse, fueled by cycle costs.</TextParagraph></p>
            <p><TextParagraph>This dapp is hosted fully on-chain Internet Computer. There is no need for centralized hosting platforms such as AWS, Google or Azure.</TextParagraph></p>
            <h1>
                <u>Link</u>
            </h1>
            <p><ThemedHyperlink href='https://jalex-7aaaa-aaaal-acfeq-cai.ic0.app' >Click Here</ThemedHyperlink></p>
            <h1>
                <u>Dapp's Demo Video</u>
            </h1>
            <h2>
                Features showcased.
            </h2>
            <p><TextParagraph>1. Login screen and logging in through digital wallets.</TextParagraph></p>
            <p><TextParagraph>2. Minimalistic UI/UX Design.</TextParagraph></p>
            <p><TextParagraph>3. Common File/Folder Operations such as Upload/Delete/Download Files, Add Folder, etc.</TextParagraph></p>
            <p><TextParagraph>4. Batch File Upload.</TextParagraph></p>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/cNp2gxTYjRY" title="Moxy Prototype Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const PxyProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>About</u>
            </h1>
            <p><TextParagraph>The Pxy Dapp is essentially a Pxy Ecosystem. It encompasses Pxy NFTs explorer and Pxy NFT Stake/Unstake functionality.</TextParagraph></p>
            <p><TextParagraph>Holders can check their Stats such as PxyX staking points, staking rewards, their staking rank, their holder rank etc.</TextParagraph></p>
            <p><TextParagraph>This dapp is hosted fully on-chain Internet Computer. There is no need for centralized hosting platforms such as AWS, Google or Azure.</TextParagraph></p>
            <h1>
                <u>Link</u>
            </h1>
            <p><ThemedHyperlink href='https://pixels.icp.xyz/' >Click Here</ThemedHyperlink></p>
            <h1>
                <u>Website Sneakpeak</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/6TRk1RfiDkc" title="Pxy Website Sneakpeak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>
                <u>Pxy Staking</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/m6urSZ-ec1c" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br></br>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/xtE76A7n4t4" title="Pxy Staking Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const NFTGeneratorProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Pxy Generator Videos</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/5tkxHjrOZnI" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br></br>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/Q2ALj2i0Vks" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const HeartbeatProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Architecture</u>
            </h1>
            <p><TextParagraph>Coming soon.</TextParagraph></p>
            <h1>
                <u>Demo Video</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/A1o1NQ-qEUk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const BurnPokedProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Technical Details</u>
            </h1>
            <p><TextParagraph>The Internet Computer Blockchain supports advanced Smart Contract called Canisters. Canisters support hosting both frontend and backend. This dapp I built will call backend Burn Canister's public methods to facilitate the NFT Burn.</TextParagraph></p>
            <p><TextParagraph>This dapp is hosted fully on-chain Internet Computer. There is no need for centralized hosting platforms such as AWS, Google or Azure.</TextParagraph></p>
            <h1>
                <u>Demo Video</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/cUbA8tWVdAk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>
                <u>Check These Poked Beauties</u>
            </h1>
            <Row>
                <Col sm='auto'>
                    <Image style={{ padding: '10px', maxWidth: '100%' }} src='/portfolio/poked/poked1.gif'></Image>
                </Col>
                <Col sm='auto'>
                    <Image style={{ padding: '10px',  maxWidth: '100%' }} src='/portfolio/poked/poked2.gif'></Image>
                </Col>
            </Row>
        </div>
    )
}

const BurnVampiresProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Demo Video</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/yx0VLi5AL2E" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const RentalBotProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Demo Video</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/Jl6q3-bFQzY" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const BundlePromoProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Demo Video</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/hPGg0P2_DHM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const DisplayMonitorProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Screenshot</u>
            </h1>
            <Image style={{ width: '100%' }} src='/portfolio/display-monitor-screenshot.png'></Image>
            <h1>
                <u>Sample Video Of Prototype App</u>
            </h1>
            <iframe width="800" height="440" style={{maxWidth: '100%'}} src="https://www.youtube.com/embed/N-XErghE0EQ" title="Customer Feedback &amp; Company Metrics Sample Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const DataConverterProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>Screenshots</u>
            </h1>
            <Image style={{ width: '100%' }} src='/portfolio/data-converter/screenshot-1.png'></Image>
            <br/>
            <br/>
            <Image style={{ width: '100%' }} src='/portfolio/data-converter/screenshot-2.png'></Image>
        </div>
    )
}

const ProductLifecycleIntegrationProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>About</u>
            </h1>
            <p><TextParagraph>Designed and developed an enterprise level integration framework for bringing together several systems at my work.</TextParagraph></p>
            <p><TextParagraph>As my employer was transitioning from legacy to new telecom business systems, we had to glue together several systems together.</TextParagraph></p>
            <p><TextParagraph>I used RabbmitMQ as the message broker. Developed an event driven architecture to enable seemless communication across different systems. Developed several consumers each responsible to communicate with the business systems via APIs.</TextParagraph></p>
            <h1>
                <u>Highlights of the integration</u>
            </h1>
            <ul>
                <li>Subscribe to events in new billing software such as customer account creation, trouble ticket updates etc. and sync the updates to inhouse Contact Management database responsbile for customer care management application.</li>
                <li>Handoff of the internet installtion orders from billing and provisioning to marketing cloud.</li>
                <li>Nightly refresh of customers from marketing cloud to internal customer database for tracking additional information.</li>
                <li>Sync internal trouble tickets to third-party ticketing company who handles customer care off hours.</li>
                <li>Read customer surveys/feedback responses from TypeForm data and create tickets for customer care, in the Ticketing System, for customers that need followups.</li>
            </ul>
        </div>
    )
}

const BizcaseProjectDetails = () => {
    return (
        <div style={{ textAlign: 'left', paddingTop: '0px', padding: '10px' }}>
            <h1>
                <u>About</u>
            </h1>
            <p><TextParagraph>Bizcase process helps business at my work to identify an opportunity to run a fiber, cable extensions in a new area/community. Then collaborate through process on financials, regulatory and compliance, get an executive approval based on the project funding. Eventually make a Go/No-go decision.</TextParagraph></p>
            <h1>
                <u>Redacted Workflow</u>
            </h1>
            <p><Image style={{ padding: '10px', width: '100%' }} src='/portfolio/bizcase/Business Case Request Process.png'></Image></p>
            <h1>
                <u>Stats Architecture</u>
            </h1>
            <p><Image style={{ padding: '10px', width: '100%' }} src='/portfolio/bizcase/Bizcase Stats Service Architecture.png'></Image></p>
            <h1>
                <u>Resolving Stats Consumers Expression With Expression Engine</u>
            </h1>
            <p><TextParagraph>The Stats Service is responsbile to absorb any changes in the Business Case process and add the Stats metadata into Business Case Stats database.</TextParagraph></p>
            <p><TextParagraph>Ex: When a new task is created, the Stats Service will generate information such as how much % the process is complete, who owns the task, add the new task to the trail of runinng history of the corresponding request, etc.</TextParagraph></p>
            <p><Image  style={{ padding: '10px', width: '100%' }} src='/portfolio/bizcase/Bizcase Stats Consumers Expression.png'></Image></p>
            <h1>
                <u>Expression Engine</u>
            </h1>
            <p><ThemedHyperlink href='https://github.com/subarbanape/expression-engine' >Expression Engine Github Link</ThemedHyperlink></p>
            <p><Image  style={{ padding: '10px', width: '100%' }} src='/portfolio/bizcase/BizCase And Expression Engine VS Folders View.png'></Image></p>
            <h2>
                <u>Expression Engine</u>
            </h2>
            <p><TextParagraph>Expression Engine is a supporting module I built for one of the projects at work.</TextParagraph></p>
            <p><TextParagraph>It helps to generate User Friendly Stat information for the workflow. Ex: For the Stat "OneLineSummary", the Expression Engine will go over the config file and get the corresponding action config. Then, run several criteria for that action. For the matching criteria, it will pick the corresponding expression. Run it and return back the final executed Expression.</TextParagraph></p>
            <p><TextParagraph>Lets say we are currently have an ongoing Pizza Delivery Order. Currently, the status of the order is Delivery is complete. It was delivered by "John Doe".</TextParagraph></p>
            <p><TextParagraph>When we feed this workflow to Expression Engine. It will give us this. "Task Deliver Pizza completed on 01/01/2024 12:00 AM by John Doe. Overall time taken: 2 days". Please ignore the unrealistic delivery time taken. :-)</TextParagraph></p>
            <p><TextParagraph>You can run the console program and you would see this output.</TextParagraph></p>
            <p><TextParagraph>I have implemented a demo DataManager and DemoConfigManager for IDataManager & IConfigManager. In my real project, they are actual AgilePoint Workflow DataManager which would interact with the real AgilePoint Server to get the requested workflow/task related information.</TextParagraph></p>
            <p><TextParagraph>The Expression Engine is made of the following</TextParagraph></p>
            <p><TextParagraph style={{ textDecorationLine: 'underline' }}>Interfaces and its implementations:</TextParagraph></p>
            <section>
                <h2 style={{ textDecorationLine: 'underline' }}>IExpression</h2>
                <p>
                    One of the core elements that make criteria and expressions. For any expression to execute, criteria needs to be evaluated to True.
                </p>
                <p><TextParagraph> Most of the time, an expression is made of an expression tree/chain. Each expression is passed to an expression interpreter to evaluate the expression.</TextParagraph></p>
                <p>Interface Members and Methods</p>
                <ul>
                    <li>Evaluate: Takes IExpressionInterpreter & IActionParams. Returns evaluated expression.</li>
                    <li>ExpressionResult: Result of this expression.</li>
                    <li>Successor: Next expression in the Expression Chain.</li>
                    <li>PredecessorResult: Result of the previous expression in the Expression Chain.</li>
                    <li>TargetExpression: Expression to evaluate if the Criteria matches. Of type IExpression.</li>
                    <li>Criteria: Criteria to evaluate. Of type ICriteria.</li>
                </ul>
                <p>Interface Implementations</p>
                <ul>
                    <li>ExpressionChain</li>
                    <li>AllCondition</li>
                    <li>AnyCondition</li>
                    <li>BooleanExpression</li>
                    <li>CriteriaExpression</li>
                    <li>MultiCriteria</li>
                    <li>MultiExpression</li>
                    <li>SimpleExpression</li>
                </ul>
            </section>
            <section>
                <h2 style={{ textDecorationLine: 'underline' }}>ICriteria</h2>
                <p>
                    TargetCriteria: Criteria to evaluate. Of type string.
                </p>
                <p>
                    Evaluate: Takes IExpressionInterpreter & IActionParams. Returns evaluated expression.
                </p>
            </section>
            <section>
                <h2 style={{ textDecorationLine: 'underline' }}>IMacro</h2>
                <p>
                    Name: Macro Name
                </p>
                <p>
                    Params: Dictionary of workflow contextual information such as Task Name, Process Name, Task Created Date, User, etc.
                </p>
                <p>
                    MacroExpression: Passed in macro expression in raw string. The macro can be inside criteria, expression, or anything. It's just a way to get information from the process/task such as the passed-in task status, process status, etc.
                </p>
            </section>
            <p><TextParagraph>Runnable modules that uses above interfaces:</TextParagraph></p>
            <section>
                <h2 style={{ textDecorationLine: 'underline' }}>MacroProcessor</h2>
                <p>
                    The low-level module that interacts with AgilePoint via Data Manager.
                </p>
                <p>It brings back requested information such as Task Status, Task Duration, Open Tasks, etc.</p>
                <p>This module has just one and only implementation of IMacroProcessor.</p>
            </section>
            <section>
                <h2 style={{ textDecorationLine: 'underline' }}>ExpressionBuilder</h2>
                <p>
                    An extension to prepare a syntactic expression chain for actions.
                </p>
                <p>Check out the program.cs to see how it is used to build a sample expression chain for the demo.</p>
            </section>
            <section>
                <h2 style={{ textDecorationLine: 'underline' }}>ExpressionInterpreter</h2>
                <p>
                    Just one and only implementation of IExpressionInterpreter.
                </p>
                <p>It has two methods, both are Interpret. </p>
                <p>One of them takes IExpression as the param, and the other takes ICriteria as the param.</p>
                <p>
                    It has further implementations of a helper module IExpressionParser.
                </p>
                <ul>
                    <li>IExpressionParser: Further parses the instructions/conditions and helps decide to evaluate the overall instruction. For example, "MACRO(GetTaskStatus, TaskName, RequestId) is Cancelled or Removed". The expression parser has several implementations that help the overall instruction to evaluate to True/False.</li>
                    <ul>
                        <li>AuxiliaryVerbParser: To decide if the expression wants to have the value 'is' or 'is not'.</li>
                        <li>TasksMacroParamsExpressionParser: Helper implementation to MacroExpressionParser.</li>
                        <li>MacroParamsExpressionParser: Helper implementation to MacroExpressionParser.</li>
                        <li>MacroExpressionParser: Returns Macro object from the passed string. Internally calls MacroParamsExpressionParser to get macro params. Also calls TasksMacroParamsExpressionParser to extract task names in the macro expression.</li>
                        <li>ValuesToCompareExpressionParser: Gets the values present in-between 'or'. For example, alfredo or parmesan or mozzarella, returns: [alfredo, parmesan, mozzarella].</li>
                    </ul>
                </ul>
            </section>
            <h2>
                <u>Sample Stat Config JSON</u>
            </h2>
            <p><Image style={{ padding: '10px', minWidth: '60%', maxWidth: '100%' }} src='/portfolio/bizcase/Sample Stat Config.png'></Image></p>
        </div>
    )
}