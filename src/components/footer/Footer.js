import React, { Component } from 'react';
import { FooterBlock, Block, FooterListBlock, FooterListItem } from './FooterStyle';

import warranty from '../../img/footer/warranty.png';
import good from '../../img/footer/good.png';
import help from '../../img/footer/help.png';
import keep from '../../img/footer/keep.png';

export default class Footer extends Component {


    render() {
        return (
            <FooterBlock>
                <Block>
                    <FooterListBlock>
                        <FooterListItem>
                            <img src={warranty} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">正品保证</font>
                        </FooterListItem>
                        <FooterListItem>
                            <img src={good} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">售后无忧</font>
                        </FooterListItem>
                        <FooterListItem>
                            <img src={help} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">帮助中心</font>
                        </FooterListItem>
                        <FooterListItem>
                            <img src={keep} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">省心购</font>
                        </FooterListItem>
                    </FooterListBlock>
                    <FooterListBlock>
                        <FooterListItem>
                            <font color="white" size="5">购物指南</font>
                        </FooterListItem>
                        <FooterListItem>
                            <font color="white" size="5">商家服务</font>
                        </FooterListItem>
                        <FooterListItem>
                            <font color="white" size="5">商家服务</font>
                        </FooterListItem>
                        <FooterListItem>
                            <font color="white" size="5">商家服务</font>
                        </FooterListItem>
                    </FooterListBlock>
                </Block>
            </FooterBlock>
        );
    }
}