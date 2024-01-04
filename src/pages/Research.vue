<template>
    <div class="page research-page pb-2 pb-md-1 pt-4">
        <section class="section mt-2 mt-md-0 py-lg-2">
            <div class="section-content">
                <div class="container">
                    <div class="section-title-description text-center">
                        <div class="section-title text-uppercase">
                            <h2>Research</h2>
                        </div>
                    </div>
                    <div class="research-list py-1">
                        <div class="research-item">
                            <div class="item-content">
                                <a href="https://www.nature.com/articles/s41598-023-47219-0" target="_blank">
                                    <div class="heading">
                                        <h3>Deep learning-based solution for smart contract vulnerabilities detection</h3>
                                    </div>
                                    <div class="description">
                                        <p>This paper aims to explore the application of deep learning in smart contract vulnerabilities detection. Smart contracts are an essential part of blockchain technology and are </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="research-item">
                            <div class="item-content">
                                <a href="https://ethresear.ch/t/the-application-of-zk-snarks-in-solidity-privacy-transformation-computational-optimization-and-mev-resistance/17017" target="_blank">
                                    <div class="heading">
                                        <h3>The Application of ZK-SNARKs in Solidity - Privacy Transformation, Computational Optimization, and MEV Resistance</h3>
                                    </div>
                                    <div class="description">
                                    <p>Ethereum is a blockchain-based open platform that allows developers to build and deploy smart contracts. Smart contracts are programmable codes on Ethereum that enable the creation of various applications. </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="research-item">
                            <div class="item-content">
                                <a href="https://mirror.xyz/geekcartel.eth/4vQgGgc0JPDWUDC0-_SSSoeYIGc07Y_Ghx32a_B4m3M" target="_blank">
                                    <div class="heading">
                                        <h3>Move, is it that good?</h3>
                                    </div>
                                    <div class="description">
                                    <p>Recently, Aptos and Sui have been in the spotlight of the crypto community; among all the news, their heritage from Diem —- Move the programming language, which is now adopted by both Aptos and Sui blockchain, is the most crucial innovation for this newly created ecosystem.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="research-item">
                            <div class="item-content">
                                <a href="https://mirror.xyz/geekcartel.eth/mJySnieodSTJB4tES_WHNwGxIOeMyG3vnT6ohEpJmL0" target="_blank">
                                    <div class="heading">
                                        <h3>Leisure Finance - DeFi’s Next Evolution?</h3>
                                    </div>
                                    <div class="description">
                                    <p> A high-performance decentralized solution to fun on the blockchain
                                        On March 6, Andre Cronje, the “godfather of DeFi”, announced his withdrawal from DeFi, causing token prices and total value locked (TVL) of related projects to plummet</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.research-list{
    width: 100%;
    max-width: 11rem;
    margin: 0 auto;
    @media(max-width: 767px){
        max-width: 420px;
    }
    @media(max-width: 480px){
        max-width: 100%;
    }
    .research-item{
        // margin-bottom: 0.35rem;
        padding: 0.35rem 0.5rem;
        border-bottom: 1px solid #252525;
        &:last-of-type{
            border-bottom: 0;
        }
        @media(max-width: 767px){
            padding: 20px 15px;
        }
        @media(max-width: 480px){
            padding: 20px 5px;
        }
        .heading{
            padding: 0.05rem 0;
        }
        h3{
            transition: all 0.3s ease 0s;
            a{
                text-decoration: none;
                color: var(--green-color);
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .description{
            color: var(--gray-color);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 2;
            @media(max-width: 767px){
                -webkit-line-clamp: 3;
            }
            a{
                display: inline-block;
                vertical-align: top;
                color: var(--gray-color);
                &:hover{
                    color: var(--white-color)
                }
            }
        }
        a{
            text-decoration: none;
            .description{
                color: var(--gray-color);
                transition: all 0.3s ease 0s;
                p{
                    text-decoration: underline;
                }
            }
            &:hover{
                h3{
                    text-decoration: underline;
                }
                .description{
                    color: var(--white-color);
                }
            }
        }
    }
}
</style>