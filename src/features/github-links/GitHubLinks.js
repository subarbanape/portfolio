import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainCard, MainCardBody, MainCardTitle, ThemedHyperlink, TitleText } from '../../common/CommonControls';

export const GitHubLinks = () => {
    return (
        <MainCard style={{ height: '100%' }}>
            <MainCardBody >
                <MainCardTitle >
                    <TitleText>&nbsp;Github Samples & Articles</TitleText>
                </MainCardTitle>
                <h2>Github</h2>
                <div style={{ padding: '15px' }}>
                    <p><ThemedHyperlink href='https://github.com/subarbanape/expression-engine'>Expression Engine</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/tiny-workflow-engine'>Tiny Workflow Engine</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/ic-nft-utils-py-main'>IC NFT Backup Tool</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/useful-agilepoint-stuffs'>Some AgilePoint Tricks</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/restaurant-automation'>Restaurant Automation Backend Design: Hobby Project</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/cryptosaps-service'>NFT Generator Backend</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/cryptosaps-admin'>NFT Generator Frontend</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/pxy-website'>NFT Staking Decentralized App (Dapp)</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/redis-sentinel-docker-bridge-network-demo-on-local-windows-machine'>Redis Sentinel Docker Bridge Network Demo</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/distributed-test-app-on-lan'>Distributed Test App On Lan Demo</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://github.com/subarbanape/SISS-Package-Executor'>SSIS Package Tool</ThemedHyperlink></p>
                </div>
                <h2>Articles</h2>
                <div>
                    <p>
                        <ThemedHyperlink href='https://medium.com/@dvinun/a-baked-goodness-of-distributed-application-components-all-in-one-docker-stack-part-1-intro-4688e95a6b19'>Demo of distributed apps using Docker Stack</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://medium.com/@dvinun/got-web-config-transformation-problem-in-your-azure-devops-953a8f29335b'>Azure Devops Configuration</ThemedHyperlink>,&nbsp;
                        <ThemedHyperlink href='https://medium.com/@dvinun/wpf-app-to-run-sql-ssis-package-3af228e52dd'>SSIS Package Tool</ThemedHyperlink>
                    </p>
                </div>
            </MainCardBody>
        </MainCard>
    );
}