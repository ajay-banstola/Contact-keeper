import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto">Navbar 2</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link">Right</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Link</a>
            </li>
        </ul>
    </div> 
        </nav>
    )
}
