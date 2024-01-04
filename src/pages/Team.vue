<template>
    <div class="page team-page pb-2 pb-md-1 pt-4">
        <section class="section mt-2 mt-md-0 py-lg-2">
            <div class="section-content">
                <div class="container">
                    <div class="section-title-description text-center">
                        <div class="section-title text-uppercase">
                            <h2>Our <span class="secondary-color">Team</span></h2>
                        </div>
                    </div>
                    <div class="team-members-list py-2 pb-lg-3">
                        <div class="content-holder d-flex flex-wrap justify-content-center">
                            <div class="member-item col-12 col-sm-6 col-md-4">
                                <div class="item-content">
                                    <div class="bg-line"></div>
                                    <div class="area-content">
                                        <div class="name">
                                            <h4>Mirror Tang</h4>
                                        </div>
                                        <div class="designation">
                                            <span>Co-Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-item col-12 col-sm-6 col-md-4">
                                <div class="item-content">
                                    <div class="bg-line"></div>
                                    <div class="area-content">
                                        <div class="name">
                                            <h4>Jiayi Li</h4>
                                        </div>
                                        <div class="designation">
                                            <span>Co-Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-item col-12 col-sm-6 col-md-4">
                                <div class="item-content">
                                    <div class="bg-line"></div>
                                    <div class="area-content">
                                        <div class="name">
                                            <h4>Tyler</h4>
                                        </div>
                                        <div class="designation">
                                            <span>Partner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-item col-12 col-sm-6 col-md-4">
                                <div class="item-content">
                                    <div class="bg-line"></div>
                                    <div class="area-content">
                                        <div class="name">
                                            <h4>Severus</h4>
                                        </div>
                                        <div class="designation">
                                            <span>Partner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-item col-12 col-sm-6 col-md-4">
                                <div class="item-content">
                                    <div class="bg-line"></div>
                                    <div class="area-content">
                                        <div class="name">
                                            <h4>Xavier</h4>
                                        </div>
                                        <div class="designation">
                                            <span>Portfolio Management</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    .team-members-list{
        .content-holder{
            max-width: 8.6rem;
            margin: 0 auto;
            @media(max-width: 767px){
                max-width: 430px;
            }
        }
    }
    .member-item{
        font-size: 0.16rem;
        color: var(--gray-variant-color);
        margin-bottom: 0.5rem;
        justify-content: center;
        display: flex;
        padding: 0 0.05rem;
        line-height: 1.1;
        @media(max-width: 767px){
            padding: 0 8px;
            margin-bottom: 15px;
            font-size: 13px;
        }
        .bg-line {
            background-image: url(@/static/images/member-border.webp);
            width: 1.78rem;
            height: 1.27rem;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            z-index: 0;
            left: 0;
            top: 0;
            filter: grayscale(1);
            opacity: 0.5;
            transition: all 0.3s ease 0s;
            z-index: -1;
        }
        .item-content{
            display: flex;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            position: relative;
            width: 2.60rem;
            height: 1.05rem;
            padding: 0.1rem 0.3rem;
            align-items: center;
            cursor: pointer;
            @media(max-width: 767px){
                width: 190px;
                height: 78px;
                padding: 5px 10px;
            }
            @media(max-width: 480px){
                width: 220px;
                height: 88px; 
            }
            &:hover{
                .bg-line{
                    opacity: 1;
                    filter: none;
                }
            }
        }
        h4{
            color: var(--green-color);
            font-family: var(--roboto-font);
            margin-bottom: 0.08rem;
        }
    }
</style>