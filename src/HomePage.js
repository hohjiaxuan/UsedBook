import React, { Component } from 'react';
import { HeaderWrapper, Nav, ListGroup, ListGroupHeaderItem, ListGroupItem, Detail, DetailBlock, DetailItemBlock, DetailItem, Advertise, AdvertiseItem, ListBlock} from './HomePageStyle';
import banner1 from './img/banner/banner1.jpg';
import banner2 from './img/banner/banner2.jpg';
import banner3 from './img/banner/banner3.jpg';
import book1 from './img/book/book1.jpg';
import book2 from './img/book/book2.jpg';
import book3 from './img/book/book3.jpg';
import book4 from './img/book/book4.jpg';
import leftArrow from './img/arrow/left-arrow.png';
import rightArrow from './img/arrow/right-arrow.png';

export default class HomePage extends Component {

    constructor(props) {
        super();
        this.state = {
            count: 0,
            imgAdvertiselist: [banner1, banner2, banner3],
            imgBookList: [book1, book2, book3, book4]
        };
        this.changePrevImage = this.changePrevImage.bind(this);
        this.changeNextImage = this.changeNextImage.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.autoChangeImage);
    }


    render() {
        return (
            <HeaderWrapper>
                <Nav>
                <ListGroup>
                <ListGroupHeaderItem>
                            分类
                    </ListGroupHeaderItem>
                    <ListGroupItem style={{cursor: "pointer"}}>
                        文学艺术
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>艺术理论</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>建筑艺术</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>工艺美术</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>鉴赏收藏</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>书法</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>摄影</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>音乐</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>舞蹈</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>
                    
                    <ListGroupItem style={{cursor: "pointer"}}>
                        少儿
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>幼儿启蒙</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>儿童文学</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>儿童绘本</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>少儿英文</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>智力游戏</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>绘画书法</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>科普百科</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>婴儿读物</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>
                    
                    <ListGroupItem style={{cursor: "pointer"}}>
                        人文社科
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>世界文化</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>文化理论</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>神秘现象</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>文化评述</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>政治/军事</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>法律实务</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>法律法规</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>新闻传播</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>

                    <ListGroupItem style={{cursor: "pointer"}}>
                        健康生活
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>游戏攻略</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>游戏随笔</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>饮食文化</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>餐饮指南</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>服装搭配</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>减肥/瘦身</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>体育运动</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>生活窍门</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>

                    <ListGroupItem style={{cursor: "pointer"}}>
                        期刊杂志
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>生活休闲</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>时尚美妆</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>旅游地理</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>健康美食</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>母婴育儿</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>社会人文</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>科普期刊</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>文学文摘</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>

                    <ListGroupItem style={{cursor: "pointer"}}>
                        经管励志
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>贸易政策</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>国际经济</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>通俗读物</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>市场/营销</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>金融/投资</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>人生哲学</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>名人励志</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>情商/情绪管理</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>

                    <ListGroupItem style={{cursor: "pointer"}}>
                        考试教育
                        <Detail>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>英语读物</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>雅思</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>托福</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>文学鉴赏</DetailItem></DetailItemBlock>
                        </DetailBlock>
                        <DetailBlock>
                            <DetailItemBlock><DetailItem>外语考试</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>研究生/本科/专科</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>汉语</DetailItem></DetailItemBlock>
                            <DetailItemBlock><DetailItem>百科全书</DetailItem></DetailItemBlock>
                        </DetailBlock>
                    </Detail>
                    </ListGroupItem>
                </ListGroup>
            
                <Advertise>
                        <AdvertiseItem onClick={this.changePrevImage}>
                            <img src={leftArrow} alt="" style={{height:"100px", width:"100px", position:"absolute", top:"35%"}}></img>
                        </AdvertiseItem>
                        <AdvertiseItem onClick={this.changeNextImage} style={{right:"0%"}}>
                            <img src={rightArrow} alt="" style={{height:"100px", width:"100px", position:"absolute", right:"0%", top:"35%"}}></img>
                        </AdvertiseItem>
                        <img src={this.state.imgAdvertiselist[this.state.count]} alt="" style={{height:"100%", width:"100%"}}></img>
                    </Advertise>
                </Nav>
                <Nav>
                    <div style = {{display: "block"}}> 文学艺术 / 更多 </div>
                </Nav>
                <ListBlock style={{height:"170px", display:"flex"}}>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                            <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", marginLeft:"0px"}}></img>
                        </span>
                        <a href="/">作品精选</a>
                        <div>三毛</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">自在独行</a>
                        <div>贾平凹</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[2]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">人生给的答案</a>
                        <div>费里斯</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[3]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">挪威的森林</a>
                        <div>村上春树</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                            <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">作品精选</a>
                        <div>三毛</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">自在独行</a>
                        <div>贾平凹</div>
                        <div>100</div>
                    </div>
                </ListBlock>
                <Nav>
                    <div style = {{display: "block"}}> 少儿 / 更多 </div>
                </Nav>
                <ListBlock style={{height:"170px", display:"flex"}}>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                            <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", marginLeft:"0px"}}></img>
                        </span>
                        <a href="/">作品精选</a>
                        <div>三毛</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">自在独行</a>
                        <div>贾平凹</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[2]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">人生给的答案</a>
                        <div>费里斯</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[3]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">挪威的森林</a>
                        <div>村上春树</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                            <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">作品精选</a>
                        <div>三毛</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">自在独行</a>
                        <div>贾平凹</div>
                        <div>100</div>
                    </div>
                </ListBlock>
                <Nav>
                    <div style = {{display: "block"}}> 人文社科 / 更多 </div>
                </Nav>
                <ListBlock style={{height:"170px", display:"flex"}}>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                            <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", marginLeft:"0px"}}></img>
                        </span>
                        <a href="/">作品精选</a>
                        <div>三毛</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">自在独行</a>
                        <div>贾平凹</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[2]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">人生给的答案</a>
                        <div>费里斯</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[3]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">挪威的森林</a>
                        <div>村上春树</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                            <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">作品精选</a>
                        <div>三毛</div>
                        <div>100</div>
                    </div>
                    <div style={{height:"170px", width:"200px"}}>
                        <span id="" className="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                            <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                        </span>
                        <a href="/">自在独行</a>
                        <div>贾平凹</div>
                        <div>100</div>
                    </div>
                </ListBlock>
                
            </HeaderWrapper>
        );
    }

autoChangeImage() {
    let index = this.state.count + 1;
    
    if(index > 2) {
        index = 0;
    }
    console.log(index);
    this.setState(() => ({
        count: index
    }));
}

changePrevImage() {
    // clearInterval(this.autoChangeImage);
    let index = this.state.count;

    if(index > 0 && index < this.state.imgAdvertiselist.length) {
        index = this.state.count - 1;
        this.setState(() => ({
            count: index
        }));
    }
}

changeNextImage() {
    // clearInterval(this.autoChangeImage);
    let index = this.state.count;
    console.log(index+" " +this.state.imgAdvertiselist.length-1);
    if(index < this.state.imgAdvertiselist.length-1) {
        index = this.state.count + 1;
        console.log(index);
        this.setState(() => ({
            count: index
        }));
    }
}
}

