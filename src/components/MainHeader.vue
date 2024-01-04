<template>
    <header id="main-header" :class="['header', { 'fixed-header': fixedHeader }]">
        <div class="container secondary-container">
            <div class="header-main-content d-flex justify-content-between align-items-center flex-wrap">
                <div class="logo">
                    <router-link to="/"><img src="@/static/images/gc-logo.webp" width="260" height="55" alt="logo"></router-link>
                </div>
                <div class="main-navigation">
                    <div class="navbar navbar-expand-md py-0">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mynavbar"
                            aria-controls="mynavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            @click="toggleNavbar"
                            :class="{ 'collapsed': !isNavbarOpen }" 
                        >
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="mynavbar" :class="{ 'show': isNavbarOpen }">
                            <button type="button" class="btn-close d-block d-md-none" @click="closeNavbar"></button>
                            <div class="navbar-logo mb-md-1 d-block d-md-none">
                                <router-link to="/" @click="closeNavbar">
                                    <img src="@/static/images/gc-logo.webp" width="260" height="55" alt="logo">
                                </router-link>
                            </div>
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <router-link to="/team" class="nav-link" @click="closeNavbar">
                                        Team
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/research" class="nav-link" @click="closeNavbar">
                                        Research
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      fixedHeader: false,
      isNavbarOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.setFixedHeader);
  },
  methods: {
    setFixedHeader() {
      this.fixedHeader = window.pageYOffset > 10;
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
  },
};
</script>
<style lang="scss" scoped>
    header{
        padding: 0.5rem 0 0.15rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
        transition: all 0.5s ease 0s;
        &.fixed-header{
            padding: 0.18rem 0;
            background: var(--black-color);
            // backdrop-filter: blur(10px);
            // -webkit-backdrop-filter: blur(10px);
        }
        @media(max-width: 767px){
            padding: 15px 0;
            .navbar-logo{
                img{
                    width: auto;
                    height: auto;
                    max-width: 100%;
                }
            }
        }
        .logo{
            width: 2.6rem;
            img{
                height: auto;
                width: 100%;
            }
            .navbar-brand{
                height: 100%;
                display: inline-block;
            }
            @media(max-width: 1100px){
                width: 3rem;
            }
            @media(max-width: 767px){
                width: 180px;
            }
        }
        .main-navigation{
            .nav-item{
                padding: 0 0.15rem;
                @media(max-width: 767px){
                    padding: 0.1rem;
                }
            }
            .nav-link{
                padding: 0.1rem 0.15rem;
                font-size: 0.2rem;
                color: var(--white-color);
                &:hover{
                    color: var(--green-color);
                }
                &.router-link-exact-active{
                    color: var(--green-color);
                }
                @media(max-width: 1199px){
                    font-size: 0.26rem;
                }
                @media(max-width: 767px){
                    font-size: 20px;
                    font-weight: 400;
                    padding: 7px;
                    text-align: center;
                }
            }
            
            .nav-item.btn-link{
                margin-left: 0.22rem;
                .nav-link{
                    color: var(--white-color);
                    padding: 0.12rem 0.2rem;
                }
                @media(max-width: 767px){
                    margin-left: 0;
                    .nav-link{
                        background: none;
                        color: var(--black-color);
                        padding: 7px;
                        min-width: auto;
                        &:hover,&.active{
                            color: var(--blue-color)
                        }
                    }
                }
            }
            .nav-item.active{
                .nav-link{
                    color: var(--blue-color);
                }
            }
            .nav-item.btn-link.active{
                .nav-link{
                    color: var(--white-color);
                }
            }
            @media(max-width: 767px){
                .nav-item.btn-link.active{
                    .nav-link{
                        color: var(--blue-color);
                    }
                }
            }
        }
        .navbar-toggler{
            width: 0.35rem;
            min-width: auto;
            height: 0.35rem;
            padding: 0;
            border: none;
            background-color: var(--green-color);
            border-radius: 0.06rem;
            @media(max-width: 767px){
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            span{
                width: 30px;
                height: 30px;
                vertical-align: top;
                background-image: url('/src/static/images/icons/toggle-icon-active.png');
                background-size: 17px;
                opacity: 1;
            }
            &:focus{
                box-shadow: none;
                opacity: 1;
            }
            &.collapsed{
                span{
                    background-image: url('/src/static/images/icons/toggle-icon.png');
                }
            }
            @media(max-width: 480px){
                span{
                    background-size: 17px;
                }
            }
        }
        .navbar-collapse,.navbar-collapse.collapsing{
            @media(max-width: 767px){
                left: 0%;
                height: 100vh;
                position: fixed;
                background: var(--mobile-nav-bg);
                padding: 30px 20px;
                top: 0;
                width: 100%;
                display: flex;
                transition: all 0.4s ease 0s;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                opacity: 0;
                pointer-events: none;
                .navbar-nav{
                    width: 100%;
                }
            }
            &.show{
                left: 1px;
                opacity: 1;
                pointer-events: all;
            }
        }
        .btn-close{
            position: absolute;
            right: 16px;
            top: 8px;
            width: 38px;
            height: 38px;
            min-width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: 16px;
            filter: brightness(0) invert(1);
            opacity: 1;
            &:focus{
                box-shadow: none;
            }
            &:hover{
                background-color: rgba(0,0,0,0);
            }
        }
        .navbar-logo{
            padding-top: 0.1rem;
            padding-bottom: 0.15rem;
            margin-bottom: 0.1rem;
            padding-left: 7px;
            padding-right: 7px;
            text-align: center;
            img{
                width: 220px;
            }
        }
    }
</style>
