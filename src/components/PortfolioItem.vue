<template>
    <div v-show="shouldShowItem" class="portfolio-item col-12 col-sm-6 col-md-4">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <div class="item-content d-flex">
                <div class="logo-area">
                    <div class="bg-line"></div>
                    <div class="area-content">
                        <img :src="item.logoSrc" width="80" height="80" alt="logo">
                    </div>
                </div>
                <div class="info">
                    <h4>{{ item.title }}</h4>
                    <div class="logo-category" v-html="item.category"></div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    computed: {
        shouldShowItem() {
            return this.$parent.showAllItems || this.$parent.portfolioItems.indexOf(this.item) < this.$parent.itemsToShow;
        },
    },
};
</script>

<style lang="scss" scoped>
    .portfolio-item{
        margin-bottom: 0.8rem;
        @media(max-width: 767px){
            margin-bottom: 12px;
        }
        a{
            text-decoration: none;
        }
        .logo-area{
            width: 1.78rem;
            height: 1.27rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .bg-line{
            background-image: url(../static/images/partners-border.webp);
            width: 1.78rem;
            height: 1.27rem;
            // width: 100%;
            // height: 100%;
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
        }
        .area-content{
            position: relative;
            max-height: 0.8rem;
            max-width: 1rem;
            img{
                max-width: 1rem;
                width: auto;
                height: auto;
                max-height: 0.8rem;
            }
        }
        .info{
            padding-left: 0.2rem;
            padding-top: 0.13rem;
            color: var(--gray-variant-color);
            h4{
                margin: 0 0 0.08rem;
                font-family: var(--roboto-font);
                transition: all 0.3s ease 0s;
                color: var(--white-color)
            }
        }
        .item-content{
            padding: 0.1rem;
            flex-wrap: wrap;
            @media(max-width: 575px){
                max-width: 310px;
                margin: 0 auto;
            }
            .info{
                width: calc(100% - 1.78rem);
            }
            &:hover{
                cursor: pointer;
                .bg-line{
                    filter: none;
                    opacity: 1;
                }
                .info{
                    h4{
                        color: var(--green-color)
                    }
                }
            }
        }
    }
</style>
