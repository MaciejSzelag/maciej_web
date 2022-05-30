<nav class="desktop" id="nav_bar">
            <div class="hm-wrap">
                <div class="h-wrap">
                    <div class="h-line"></div>
                    <div class="h-line"></div>
                    <div class="h-line"></div>
                </div>
            </div>
            <div class="ul-wrap">

                <ul>
                <li id="home"><a href="<?php $path;if(empty($path)){ echo '#home_section';} else {echo $path . '#home_section';} ?>" class="hrefa" data-nav-name="Top-Home">Home</a>
                    </li>
                    <li id="about"><a href="<?php $path;if(empty($path)){ echo '#section_about';} else {echo $path . '#section_about';} ?>" class="hrefa" data-nav-name="It's me">About me</a>
                    </li>
                    <li id="what-i-do"><a href="<?php $path;if(empty($path)){ echo '#section_what_i_do';} else {echo $path . '#section_what_i_do';} ?>" class="hrefa" data-nav-name="I do this">What I do</a>
                    </li>
                    <li id="what-i-do"><a href="<?php $path;if(empty($path)){ echo 'page/price';} else {echo $path . 'page/price';} ?>" class="hrefa" data-nav-name="Check it">Prices</a>
                    </li>
                    <!-- <li><a href="../price/" class="">Prices</a></li> -->
                    <li id="contact"><a href="#section_contact" class="hrefa" data-nav-name="Send @">Contact</a>
                    </li>
                </ul>
            </div>


        </nav>
        <div class="div-fixed">
            <div class="fixed-txt">
                <h1><a href="mailto:maciej.szelag@msweb.co.uk" data-fix-name="Msg me"><i class="fas fa-envelope"></i></h1></a>
            </div>
        </div>