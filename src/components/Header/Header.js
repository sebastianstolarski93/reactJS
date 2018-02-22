import React from "react";
import Clock from "./Clock/Clock";

class Header extends React.Component {

    render() {
        return <header class="header header--scrolled">
            <div class="navigation-trigger hidden-xl-up toggled" data-sa-action="aside-open" data-sa-target=".sidebar">
                <i class="zmdi zmdi-menu"></i>
            </div>
            <div class="logo hidden-sm-down">
                <h1>
                    <a href="http://onet.pl">Crypto Tracker 1.0</a>
                </h1>
            </div>
            <form class="search">
                <div className="search__inner">
                    <input type="text" class="search__text" placeholder="Search for people, files, documents..."/>
                    <i class="zmdi zmdi-search search__helper" data-sa-action="search-close"></i>
                </div>
            </form>
            <ul className="top-nav">
                <li class="dropdown hidden-xs-down">
                    <a href="" data-toggle="dropdown" aria-expanded="true">
                        <i class="zmdi zmdi-apps"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu" x-placement="bottom-end">
                        <div class="row app-shortcuts">
                            <a class="col-4 app-shortcuts__item" href="">
                                <i class="zmdi zmdi-calendar"></i>
                                <small class="">Calendar</small>
                            </a>
                            <a class="col-4 app-shortcuts__item" href="">
                                <i class="zmdi zmdi-file-text"></i>
                                <small class="">Files</small>
                            </a>
                            <a class="col-4 app-shortcuts__item" href="">
                                <i class="zmdi zmdi-email"></i>
                                <small class="">Email</small>
                            </a>
                            <a class="col-4 app-shortcuts__item" href="">
                                <i class="zmdi zmdi-trending-up"></i>
                                <small class="">Reports</small>
                            </a>
                            <a class="col-4 app-shortcuts__item" href="">
                                <i class="zmdi zmdi-view-headline"></i>
                                <small class="">News</small>
                            </a>
                            <a class="col-4 app-shortcuts__item" href="">
                                <i class="zmdi zmdi-image"></i>
                                <small class="">Gallery</small>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="clock hidden-md-down">
                <Clock/>
            </div>
        </header>
    }

}

export default Header;