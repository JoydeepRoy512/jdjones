

<!DOCTYPE html>
<html ng-app="myApp" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="shortcut icon" href="images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="shortcut icon" href="files/favicon.ico" type="image/vnd.microsoft.icon" />
    <script src="https://kit.fontawesome.com/231abf9bc3.js" crossorigin="anonymous"></script>
    <!--<title>J.D.Jones & Co:Packings-Seals-Gaskets-Lubricants-PTFE</title>-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" cont ent="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121107908-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-121107908-1');
    </script>

    <!--Meta Info-->
        <title>
        Vision & Mission of JD Jones | JD Jones    </title>
    <meta name="title" content="Vision & Mission of JD Jones | JD Jones">
    <meta name="description" content="At JD Jones, we are driven by a distinct set of values that our customers can see in their interaction with us everyday. Learn more!">
    <meta name="keywords" content="">

        <!--Meta Info-->
    <link rel="canonical" href="https://www.jdjones.com/404.php">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/flexslider.min.css" /> -->
    <!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>-->


    <script src="https://code.jquery.com/jquery-3.6.4.min.js"
        integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <script defer type="text/javascript" src="js/jquery.flexslider.js"></script>
    <link type="text/css" rel="stylesheet" href="css/custom.css" media="all" />

    <script defer type="text/javascript" src="js/js1.js"></script>

    <script defer type="text/javascript" src="js/js5.js"></script>

    <!--<script async type="text/javascript" src="js/merged.js"></script> -->


    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />

    <style type="text/css">
        [ng\:cloak],
        [ng-cloak],
        [data-ng-cloak],
        [x-ng-cloak],
        .ng-cloak,
        .x-ng-cloak {
            display: none !important;
        }
    </style>
    <script>
        var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js"
        integrity="sha512-ijLvQMMXgWAO85zfDbKeoqNR7015wrZI42XGYorITKkG0sVlP4t+Rt5Dl9EKDkrPxGrWZmVCUW5oIXkVOrnCiw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script defer="" src="js/jquery.flexslider.js"></script>

    <script type="text/javascript">
        //![CDATA[
        //jQuery(window).on('load', function() { // makes sure the whole site is loaded 
        //jQuery('#status').delay(500).fadeOut(); // will first fade out the loading animation 
        //jQuery('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        //jQuery('body').delay(350).css({'overflow':'visible'});
        //})
        //]]>
        //jQuery(function(){
        //SyntaxHighlighter.all();
        //});
        jQuery(window).load(function () {
            jQuery('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 109,
                itemMargin: 21,
                asNavFor: '#slider'
            });

            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel",
                start: function (slider) {
                    jQuery('body').removeClass('loading');
                }
            });
        });
    </script>
    <script type="text/javascript">

        jQuery.extend(Drupal.settings, {
            "basePath": "\/",
            "pathPrefix": "",
            "ajaxPageState": {
                "theme": "jones",
                "theme_token": "eJASbAXWs9vmrEzZLwwomXW1JflC9sNskr67EyhIaFM",
                "js": {
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery\/1.10\/jquery.min.js": 1,
                    "misc\/jquery.once.js": 1,
                    "misc\/drupal.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.core.min.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/misc\/1.9\/jquery.ba-bbq.min.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/misc\/1.9\/overlay-parent.js": 1,
                    "modules\/contextual\/contextual.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/external\/jquery.cookie.js": 1,
                    "sites\/all\/modules\/google_analytics 3\/googleanalytics.js": 1,
                    "0": 1,
                    "sites\/all\/modules\/contrib\/captcha\/captcha.js": 1,
                    "misc\/textarea.js": 1,
                    "modules\/toolbar\/toolbar.js": 1,
                    "sites\/all\/themes\/contrib\/jones\/js\/modernizr.js": 1,
                    "sites\/all\/themes\/contrib\/jones\/js\/bootstrap.min.js": 1,
                    "sites\/all\/themes\/contrib\/jones\/js\/ie10-viewport-bug-workaround.js": 1,
                    "sites\/all\/themes\/contrib\/jones\/js\/viewportchecker.js": 1,
                    "sites\/all\/themes\/contrib\/jones\/js\/readmore.js": 1,
                    "sites\/all\/themes\/contrib\/jones\/js\/common.js": 1
                },
                "css": {
                    "modules\/system\/system.base.css": 1,
                    "modules\/system\/system.menus.css": 1,
                    "modules\/system\/system.messages.css": 1,
                    "modules\/system\/system.theme.css": 1,
                    "misc\/ui\/jquery.ui.core.css": 1,
                    "misc\/ui\/jquery.ui.theme.css": 1,
                    "modules\/overlay\/overlay-parent.css": 1,
                    "modules\/contextual\/contextual.css": 1,
                    "modules\/comment\/comment.css": 1,
                    "sites\/all\/modules\/contrib\/date\/date_api\/date.css": 1,
                    "modules\/field\/theme\/field.css": 1,
                    "modules\/node\/node.css": 1,
                    "modules\/search\/search.css": 1,
                    "modules\/user\/user.css": 1,
                    "sites\/all\/modules\/contrib\/views\/css\/views.css": 1,
                    "sites\/all\/modules\/contrib\/ckeditor\/css\/ckeditor.css": 1,
                    "sites\/all\/modules\/contrib\/ctools\/css\/ctools.css": 1,
                    "modules\/shortcut\/shortcut.css": 1,
                    "modules\/toolbar\/toolbar.css": 1,
                    "sites\/all\/themes\/contrib\/jones\/css\/bootstrap.min.css": 1,
                    "sites\/all\/themes\/contrib\/jones\/css\/main.css": 1,
                    "sites\/all\/themes\/contrib\/jones\/css\/animate.css": 1
                }
            },
            "overlay": {
                "paths": {
                    "admin": "node\/*\/edit\nnode\/*\/delete\nnode\/*\/revisions\nnode\/*\/revisions\/*\/revert\nnode\/*\/revisions\/*\/delete\nnode\/add\nnode\/add\/*\noverlay\/dismiss-message\nuser\/*\/shortcuts\nadmin\nadmin\/*\nbatch\ntaxonomy\/term\/*\/edit\nuser\/*\/cancel\nuser\/*\/edit\nuser\/*\/edit\/*",
                    "non_admin": "admin\/structure\/block\/demo\/*\nadmin\/reports\/status\/php"
                },
                "pathPrefixes": [],
                "ajaxCallback": "overlay-ajax"
            },
            "googleanalytics": {
                "trackOutbound": 1,
                "trackMailto": 1,
                "trackDownload": 1,
                "trackDownloadExtensions": "7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|webp|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"
            },

            "tableHeaderOffset": "Drupal.toolbar.height"
        });
    </script>

    <style>
        /* ==========for search box============== */
        .search-sugg {
            position: relative;
            display: block;
            z-index: 99;
        }

        .d-none {
            display: none;
        }

        .search-sugg ul {
            position: absolute;
            top: 0;
            list-style-type: none;
            margin: 5px 0;
            padding: 8px;
            max-height: 200px;
            overflow-y: auto;
            width: 100%;
            background: #fff;
            height: 250px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        .search-sugg ul li {
            margin: 5px;
            border-bottom: 1px solid rgb(167, 167, 167);
        }


        .search-sugg ul::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        .search-sugg ul::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }

        /* Handle */
        .search-sugg ul::-webkit-scrollbar-thumb {
            background: rgb(255, 145, 0);
            border-radius: 10px;
        }
    </style>
    <script type="text/javascript" src="js/angular.min.js"></script>
    <script type="text/javascript" src="js/angular-app.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QFDHLJEKVC"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-QFDHLJEKVC');
    </script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>

        function onSubmit(token) {
            var name = document.getElementById("name").value;
            var phone = document.getElementById("edit-field-user-phone").value;
            var email = document.getElementById("edit-field-user-email").value;
            var country = document.getElementById("edit-field-country").value;

            let submitButton = document.getElementById("submitButton");


            var nameError = document.getElementById("nameError");
            var phoneError = document.getElementById("PhoneError");
            var emailError = document.getElementById("EmailError");
            var countryError = document.getElementById("cuntryError");


            if (name.trim() === "") {
                nameError.textContent = "Name is required!";
                submitButton.disabled = true// Prevent the form from submitting
            } else {
                nameError.textContent = "";
                submitButton.disabled = false// Clear the error message
            }


            if (phone.trim() === "") {
                phoneError.textContent = "Phone is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                phoneError.textContent = ""; // Clear the error message
            }


            if (email.trim() === "") {
                emailError.textContent = "Email is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                emailError.textContent = ""; // Clear the error message
            }


            if (country.trim() === "") {
                countryError.textContent = "Country is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                countryError.textContent = ""; // Clear the error message
            }


            if (name.trim() != "" && phone.trim() != "" && email.trim() != "" && country.trim() != "") {
                document.getElementById("general-enquiry").submit();

            }
        }


        function onSubmit1(token) {
            var name = document.getElementById("edit-field-user-name--2").value;
            var phone = document.getElementById("edit-field-user-phone--2").value;
            var email = document.getElementById("edit-field-user-email--2").value;
            var country = document.getElementById("edit-field-country--2").value;
           

            let submitButton = document.getElementById("submitButton");


            var nameError = document.getElementById("snglnerr");
            var phoneError = document.getElementById("snglperr");
            var emailError = document.getElementById("sngleerr");
            var countryError = document.getElementById("snglcerr");


            if (name.trim() === "") {
                nameError.textContent = "Name is required!";
                submitButton.disabled = true// Prevent the form from submitting
            } else {
                nameError.textContent = "";
                submitButton.disabled = false// Clear the error message
            }


            if (phone.trim() === "") {
                phoneError.textContent = "Phone is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                phoneError.textContent = ""; // Clear the error message
            }


            if (email.trim() === "") {
                emailError.textContent = "Email is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                emailError.textContent = ""; // Clear the error message
            }


            if (country.trim() === "") {
                countryError.textContent = "Country is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                countryError.textContent = ""; // Clear the error message
            }


            if (name.trim() != "" && phone.trim() != "" && email.trim() != "" && country.trim() != "" ) {
                document.getElementById("product-enquiry").submit();
            }
        }


        function onSubmit2(token) {
            console.log("nbifadofnsa");

            var name = document.getElementById("edit-name-3").value;
            var phone = document.getElementById("edit-phone-number-3").value;
            var email = document.getElementById("edit-email-3").value;

            let submitButton = document.getElementById("submitButton");


            var nameError = document.getElementById("nameError-3");
            var phoneError = document.getElementById("phoneError-3");
            var emailError = document.getElementById("emailError-3");


            if (name.trim() === "") {
                nameError.textContent = "Name is required!";
                submitButton.disabled = true// Prevent the form from submitting
            } else {
                nameError.textContent = "";
                submitButton.disabled = false// Clear the error message
            }


            if (phone.trim() === "") {
                phoneError.textContent = "Phone is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                phoneError.textContent = ""; // Clear the error message
            }


            if (email.trim() === "") {
                emailError.textContent = "Email is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                emailError.textContent = ""; // Clear the error message
            }




            if (name.trim() != "" && phone.trim() != "" && email.trim() != "") {
                document.getElementById("custom-functions-contact-form").submit();
                return true;
            }
        }

        function onSubmit3(token) {
            console.log("sub down ");
            var name = document.getElementById("edit-field-user-name--3").value;
            var phone = document.getElementById("edit-field-user-phone--3").value;
            var email = document.getElementById("edit-field-user-email--3").value;
            var country = document.getElementById("edit-field-country--3").value;
       
            console.log("sub down 1",name,phone,email);
            let submitButton = document.getElementById("submit3");


            var nameError = document.getElementById("snglnerr--3");
            var phoneError = document.getElementById("snglperr--3");
            var emailError = document.getElementById("sngleerr--3");
            var countryError = document.getElementById("snglcerr--3");


            if (name.trim() === "") {
                nameError.textContent = "Name is required!";
                submitButton.disabled = true// Prevent the form from submitting
            } else {
                nameError.textContent = "";
                submitButton.disabled = false// Clear the error message
            }


            if (phone.trim() === "") {
                phoneError.textContent = "Phone is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                phoneError.textContent = ""; // Clear the error message
            }


            if (email.trim() === "") {
                emailError.textContent = "Email is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                emailError.textContent = ""; // Clear the error message
            }


            if (country.trim() === "") {
                countryError.textContent = "Country is required!";
                event.preventDefault(); // Prevent the form from submitting
            } else {
                countryError.textContent = ""; // Clear the error message
            }

            console.log("sub down 3");
            if (name.trim() != "" && phone.trim() != "" && email.trim() != "" && country.trim() != "") {
                console.log("sub down");
                document.getElementById("product-enquiry-download").submit();
            }
        }


    </script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N58R6BMZ');</script>
<!-- End Google Tag Manager -->
</head>

<body ng-controller="ReportController">
    <!-- Google Tag Manager (noscript) -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N58R6BMZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <!-- End Google Tag Manager (noscript) -->
    <div id="preloader">
        <div id="status" class="text-center animated fadeIn">
            <span><img src="images/logo-jdjones.webp" width="104" height="104" alt="Logo"></span>
            <h3>A world of packings, seals gaskets &amp; lubricants</h3>
        </div>
    </div>

    <div id="scrollUp">
        <span class="global-form-btn" style="margin-bottom: 1rem;"><a id="initEnqBtn" href="javascript:void(0)"
                data-toggle="modal" data-target="#myEnquireGeneral" class="overlay"><img
                    src="images/enquire-now-btn.webp" alt=""></a></span>
        <span class="glyphicon glyphicon-chevron-up"  style="margin-bottom: 1rem;"></span>
       <span onclick="whatappRedirect()" class="whatappbtn">

            <img src="images/whatsappimg.png" alt="whatapp" class="whatsappimgg">

        </span> 
    </div>

    <!-- Modal start -->
    <div class="modal fade" id="myEnquireGeneralSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span
                            class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> </button>
                </div>
                <div class="modal-body aCenter black">
                    <!--<h2 class="modal-title" id="myModalLabel">Talking points &amp; trends for designer furniture</h2>-->
                    <h4 class="aCenter headline scarlet">Enquiry sent</h4>
                    Thank you for your query, we will get back to you soon
                </div>
            </div>
        </div>
    </div>
    <!-- #Modal end -->

    <!-- Modal start -->
    <div class="modal fade" id="myEnquireGeneral" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-xl modal-dialog-centered" style="padding-top:40px" role="document">
            <div class="modal-content">
                <div class="modal-body aCenter black">
                    <div class="row">
                        <div class="col-md-6 hidden-sm hidden-xs form-sidebar">
                            <img src="images/sergey-zolkin-_UeY8aTI6d0-unsplash.webp" alt="" class="form-background">
                            <img src="images/Message-01.webp" alt="" class="form-logo">
                        </div>
                        <div class="col-sm-12 col-md-6 form-section">
                            <div class="form-header">
                                <img src="images/Message-01.webp" alt="" class="form-logo">
                                <h3 style="color:white;">Fill in your details for more information</h3>
                            </div>
                            <form action="site-enquiry" method="post" id="general-enquiry" accept-charset="UTF-8">
								 <input type="hidden" name="type" value="Enquiry" />
                                <input type="hidden" name="spam_check" value="">
								<input type="hidden" name="source" value="">
                                <input type="hidden" name="time_taken" class="time-taken" value="">
                                <div>
                                    <div class="form-group clearfix action">
                                        <div class="form-item form-type-textfield form-item-field-user-name">
                                            <input class="form-control form-text form-text required"
                                                onkeyup="validateName()" title="letters only" placeholder="Name*"
                                                type="text" id="name" name="name" size="60" maxlength="128" required />
                                            <span id="nameError" style="color: blue;"></span>
                                        </div>
                                        <p>Only alphabets, hyphens and apostrophes. Can't be blank.</p>
                                    </div>
                                    <div class="form-group clearfix action">
                                        <div class="form-item form-type-textfield form-item-field-user-phone">
                                            <input class="form-control form-text form-text required"
                                                onkeyup="validatePhone()" placeholder="Phone*" type="tel"
                                                id="edit-field-user-phone" name="phone" value="" maxlength="10" />
                                            <span id="PhoneError" style="color: blue;"></span>
                                        </div>
                                        <p>Please enter a valid phone number</p>
                                    </div>
                                    <div class="form-group clearfix action">
                                        <div class="form-item form-type-textfield form-item-field-user-email">
                                            <input class="form-control form-text form-text required"
                                                onkeyup="validateEmail()" placeholder="Email*" type="email"
                                                id="edit-field-user-email" name="email" size="60" maxlength="128" />
                                            <span id="EmailError" style="color: blue;"></span>
                                        </div>
                                        <p>Please enter a valid email-id</p>
                                    </div>
                                    <div class="form-group clearfix action">
                                        <div class="form-item form-type-textfield form-item-field-country">
                                            <input class="form-control form-text form-text required"
                                                onkeyup="validateCuntry()" placeholder="Country*" type="text"
                                                id="edit-field-country" name="country" value="" size="60"
                                                maxlength="128" />
                                            <span id="cuntryError" style="color: blue;"></span>
                                        </div>
                                        <p>Cannot be blank.</p>
                                    </div>
                                    <div class="form-group clearfix action">
                                        <div class="form-item form-type-textarea form-item-field-enquery-comment">
                                            <div class="form-textarea-wrapper resizable"><textarea
                                                    class="form-control form-text form-textarea required"
                                                    placeholder="Type here for any specific query"
                                                    id="edit-field-enquery-comment" name="message" cols="60"
                                                    rows="5"></textarea></div>
                                        </div>
                                        <p>Message cannot be blank.</p>
                                    </div>
                                    <!-- <div class="captcha"><input type="hidden" name="captcha_sid" value="1041249" />
                                        <input type="hidden" name="captcha_token" value="854e3baf97f22aea73b490e7df7c4646" />
                                        <img typeof="foaf:Image" src="./image_captcha?sid=1041249&amp;ts=1639641273" width="180" height="60" alt="Image CAPTCHA" title="Image CAPTCHA" />
                                        <div class="form-item form-type-textfield form-item-captcha-response">
                                            <label for="edit-captcha-response">What code is in the image? <span class="form-required" title="This field is required.">*</span></label>
                                            <input type="text" id="edit-captcha-response" name="captcha_response" value="" size="15" maxlength="128" class="form-text required" />
                                            <div class="description">Enter the characters shown in the image.</div>
                                        </div>
                                    </div><span>What code is in the image?</span> -->
                                    <!--<input class="progress-button btn btn-primary btn-lg ga-code form-submit form-submit" type="submit" id="edit-submit" name="op" value="ENQUIRE NOW" />--><input
                                        type="hidden" name="form_build_id"
                                        value="form-e1ySXodbf3QnAkT3XVOkZkkLE0ZP96zW2vdwGDawmg8" />
                                    <button type="submit" class="g-recaptcha btn btn-primary btn-lg"
                                        data-sitekey="6LfEdzogAAAAAM1GsIsxracvGkBa6VuwM1UfEgdi" data-callback='onSubmit'
                                        data-action='submit' id="submitButton" value="Submit" disabled>ENQUIRE
                                        NOW</button>
                                    <!-- <input type="hidden" name="form_token" value="wC6OFaMRMlFSZBD7l8eNTnGwVNznWaLguQqgK6N7Upo" />
                                    <input type="hidden" name="form_id" value="general_enquiry" /> -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a id="initEnq" href="javascript:void(0)" data-toggle="modal" data-target="#myEnquireGeneral" class="overlay"></a>
    <a id="initEnquireSuccess" href="javascript:void(0)" data-toggle="modal" data-target="#myEnquireGeneralSuccess"
        class="overlay"></a>

    <script>
    </script>

    <!-- scrollup -->

    <div class="clearfix">
        <div class="contextual-links-wrapper">
            <ul class="contextual-links">
                <li class="block-configure first last"><a href="">Configure
                        block</a></li>
            </ul>
        </div>
        <div class="navbar-wrapper">
            <div class="container">
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="header clearfix">
                        <div class="logo"> <a class="navbar-brand" href="/"><img src="images/logo.png"
                                    alt="fluid sealing products"></a> </div>
                    </div>
                    <!-- .header /.clearfix -->
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span
                                    class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span
                                    class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <div class="clearfix">
                                <ul class="nav navbar-nav">
                                    <li><a href="/">Home</a></li>

                                    <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">Our Products <span
                                                class="caret"></span></a>



                                        <ul class="dropdown-menu">
                                            <li><a href="Product-all">All</a></li>
                                            <li><a href="compression-packing">Compression Packing</a></li>
                                            <li><a href="expanded-ptfe-products">Expanded PTFE
                                                    Products</a></li>
                                            <li><a href="industrial-polymer-products">Industrial Polymer
                                                    Products</a></li>
                                            <li><a href="insulation">Insulation</a></li>
                                            <li><a href="graphite-sealing-products">Graphite Sealing
                                                    Products</a></li>
                                            <li><a href="speciality-lubricant">Speciality Lubricant</a>
                                            </li>
                                            <li><a href="low-emission-packing">Low Emission Packing</a>
                                            </li>
                                        </ul>




                                    </li>
                                    <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">Industries Served
                                            <span class="caret"></span></a>



                                        <ul class="dropdown-menu">
                                            <li><a href="all">All</a></li>
                                            <li><a href="breweries-bottling-distilleries">Breweries,
                                                    Bottling &amp; Distilleries</a></li>
                                            <li><a href="cement-plant">Cement Plant</a></li>
                                            <li><a href="chemical-plant">Chemical Plant</a></li>
                                            <li><a href="fertilisers">Fertilisers</a></li>
                                            <li><a href="food-processing-industry">Food Processing
                                                    Industry</a></li>
                                            <li><a href="mines">Mines</a></li>
                                            <li><a href="oil-refinery">Oil Refinery</a></li>
                                            <li><a href="paint-manufacturing-plant">Paint Manufacturing
                                                    Plant</a></li>
                                            <li><a href="petrochemical-plant">Petrochemical Plant</a>
                                            </li>
                                            <li><a href="power-plant">Power Plant</a></li>
                                            <li><a href="pulp-paper-mill">Pulp &amp; Paper Mill</a>
                                            </li>
                                            <li><a href="steel-plant">Steel Plant</a></li>
                                            <li><a href="sugar-plant">Sugar Plant</a></li>
                                            <li><a href="valve">Valve</a></li>
                                        </ul>




                                    </li>
                                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">Corporate
                                            Responsibility <span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="csr">CSR</a></li>
                                            <li><a href="quality-policy">Quality
                                                    Policy</a></li>
                                            <li><a href="EHS-policy">EHS Policy</a>
                                            </li>
                                            <li><a href="company-ethics">Company
                                                    Ethics</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">About Us <span
                                                class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="about">About</a></li>
                                            <li><a href="vision-mission">Vision & Mission</a></li>
                                            <li><a href="office-manufacturing">Office &amp;
                                                    Manufacturing</a></li>
                                            <li><a href="our-team">Our Team</a></li>
                                            <li><a href="Test-Facilities">Test Facilities</a></li>
                                            <li><a href="certifications-approvals">Certifications &amp;
                                                    Approvals</a>
                                            </li>
                                            <li><a href="our-valued-customers-globally">Our Customers</a>
                                            </li>
                                            <li><a href="our-strength">Our Strength</a></li>
                                            <li><a href="media-centre">Media Centre</a></li>
                                            <li><a href="career">Career</a></li>
                                            <li><a href="chairman-desk">From the Chairman's Desk</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                </ul>
                            </div>
                            <!--  -->
                        </div>
                        <!-- #navbar -->
                        <div class="search-wrapper">
                            <div class="input-group"
                                ng-init="reportsLoad('https://www.jdjones.com/report-search-angular')">
                                <input type="text" class="form-control" id="search_input" placeholder="Search"
                                    ng-model="search_reports" ng-change="showNameChanged()" onchange="keydown()">
                                <div class="input-group-btn">
                                    <button class="btn btn-default" id="searchSubmit" type="submit"><i
                                            class="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                            <div class="search-sugg hide-result" ng-hide="filteredArray.length < 1">
                                <ul>
                                    <li ng-repeat="variant in filteredArray | orderBy: 'name'"><a
                                            href="javascript:void(0);"
                                            ng-click="getReportsFullViewFun('https://www.jdjones.com/product-view?slug=',variant.slug)"
                                            ng-bind="variant.name"></a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- .search-wrapper -->

                    </div>
                    <!-- .container -->
                </nav>
                <!-- navbar-fixed-top -->
            </div>
            <!-- .container -->
        </div>
        <script>
            //function keydown(event, objt) {
                //if (event.keyCode == 13 && jQuery(objt).val() != "") {
                    //jQuery("#searchSubmit").trigger("click")
                //}
            //}
        </script>
        <script>
            /* function validateName() {
                    const nameInput = document.getElementById("name");
                 const name = nameInput.value;
                 const nameError = document.getElementById("nameError");
                 const submitButton = document.getElementById("submitButton");
     
                 if (/^[A-Za-z]+$/.test(name)) {
                     nameError.textContent = "";
                     submitButton.disabled = false;
                 } else {
                     nameError.textContent = "Name should contain letters only.";
                     submitButton.disabled = true;
                 }
                 
             } */
				var subButton1 = false;
				var subButton2 = false;
				var subButton3 = false;
			
            function validatePhone() {
                const phoneInput = document.getElementById("edit-field-user-phone");
                const phone = phoneInput.value;
                const PhoneError = document.getElementById("PhoneError");
                //const submitButton2 = document.getElementById("submitButton");
				

                if (/[0-9]{10}/.test(phone)) {
                    PhoneError.textContent = "";
                    //submitButton2.disabled = false;
					subButton1 = true;
					
                } else {
                    PhoneError.textContent = "Phone should be valid";
                    //submitButton2.disabled = true;
					subButton1 = false;
                }
				
				check();

            }


            function validateEmail() {
                const emailInput = document.getElementById("edit-field-user-email");
                const email = emailInput.value;
                const EmailError = document.getElementById("EmailError");
                //const submitButton3 = document.getElementById("submitButton");

                if (/^[a-z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|rediffmail\.com)[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
                    EmailError.textContent = "";
                    //submitButton3.disabled = false;
					subButton2 = true;
                } else {
                    EmailError.textContent = "Enter your valid official email.";
                    //submitButton3.disabled = true;
					subButton2 = false;
                }
				
				check();

            }


            function validateCuntry() {
                const cuntryInput = document.getElementById("edit-field-country");
                const cuntry = cuntryInput.value;
                const cuntryError = document.getElementById("cuntryError");
                //const submitButton4 = document.getElementById("submitButton");
				

                if (/^[A-Za-z]+$/.test(cuntry)) {
                    cuntryError.textContent = "";
                    //submitButton4.disabled = false;
					subButton3 = true;
                } else {
                    cuntryError.textContent = "Name should contain letters only.";
                    //submitButton4.disabled = true;
					subButton3 = false;
                }
				check();
				
            }
			
			window.onload = function () {
    			check();
			};
			
			function check() {
				
			
				const submitButton2 = document.getElementById("submitButton");
			
				if(subButton1 == false || subButton2 == false || subButton3 == false) {
				
					submitButton2.disabled = true;
				
				}
				else{
					submitButton2.disabled = false;
				}
			}
			
			
			
        </script>

        <script>
            $(document).ready(function () {

                $("#general-enquiry").submit(function (event) {
                    console.log("submit");
                  
                    var name = document.getElementById("name").value;
                    var phone = document.getElementById("edit-field-user-phone").value;
                    var email = document.getElementById("edit-field-user-email").value;
                    var country = document.getElementById("edit-field-country").value;
                    let submitButton = document.getElementById("submitButton");


                    var nameError = document.getElementById("nameError");
                    var phoneError = document.getElementById("PhoneError");
                    var emailError = document.getElementById("EmailError");
                    var countryError = document.getElementById("cuntryError");


                    if (name.trim() === "") {
                        nameError.textContent = "Name is required!";
                        submitButton.disabled = true// Prevent the form from submitting
                    } else {
                        nameError.textContent = "";
                        submitButton.disabled = false// Clear the error message
                    }


                    if (phone.trim() === "") {
                        phoneError.textContent = "Phone is required!";
                        event.preventDefault(); // Prevent the form from submitting
                    } else {
                        phoneError.textContent = ""; // Clear the error message
                    }


                    if (email.trim() === "") {
                        emailError.textContent = "Email is required!";
                        event.preventDefault(); // Prevent the form from submitting
                    } else {
                        emailError.textContent = ""; // Clear the error message
                    }


                    if (country.trim() === "") {
                        countryError.textContent = "Country is required!";
                        event.preventDefault(); // Prevent the form from submitting
                    } else {
                        countryError.textContent = ""; // Clear the error message
                    }



                    event.preventDefault();
                });

            });
        </script>
        <script>

            jQuery(function ($) {
                var input = $('#search_input');
                input.on('keydown', function () {
                    var key = event.keyCode || event.charCode;

                    if (key == 8 || key == 46) {
                        input_val = jQuery('#search_input').val();

                        if (input_val.length == 1 || input_val.length < 2)
                            jQuery(".hide-result").css("display", "none");
                    } else {
                        jQuery(".hide-result").css("display", "block");
                    }

                });
            });

            jQuery('#search_input').focusin(function () {
                jQuery(".hide-result").css("display", "block");
            });
            jQuery('body').click(function (e) {

                if (e.target.classList.contains("form-control")) {


                } else {
                    jQuery(".hide-result").css("display", "none");
                }
            });



        </script>

        <script>
            function whatappRedirect() {
                window.open("https://wa.me/+919831010244", "_blank")

            }
        </script>


<div id="node-591" class="node node-page clearfix" about="/vision-mission" typeof="foaf:Document">


    <span property="dc:title" content="Vision &amp; Mission" class="rdf-meta element-hidden"></span><span
        property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span>

    <div class="content">
        <div class="field field-name-body field-type-text-with-summary field-label-hidden">
            <div class="field-items">
                <div class="field-item even" property="content:encoded">
                    <style>
                        input.ajax-processed {
                            display: none
                        }
                    </style>
                    <div class="banner clearfix">
                        <div class="banner-bg bg-about"> </div>
                    </div>

                    <div class="container space-bttm-40 content-body">
                        <div class="row">

                            <div class="col-lg-12 clearfix">
                                <h2>Not Found</h2>
                            </div>
                            <!-- /.col-lg-12 -->

                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <h3>Not Found</h3>
                                
                            </div>
                            <!-- /.col-lg-6 -->

                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- .container -->


                </div>
            </div>
        </div>
    </div>



</div>









<div class="contextual-links-wrapper">
    <ul class="contextual-links">
        <li class="block-configure first last"><a
                href="/admin/structure/block/manage/custom_blocks/common_footer/configure?destination=node/7">Configure
                block</a></li>
    </ul>
</div>
<div class="container-fluid">
    <div class="row">
        <footer class="clearfix">
            <div class="container footer-nav clearfix">
                <div class="col-xs-12 col-sm-2 col-md-3 col-lg-3">
                    <h4><span class="glyphicon glyphicon-map-marker"></span><a href="/contact-us"> Location</h4>
                    </a>
                    <p>2nd Floor, 9B, Wood St, Mullick Bazar, Park Street area, Kolkata, West Bengal 700016<br>
                                                  <!--  <p>9B Dr Martin Luther King Sarani<br> 2nd Floor Kolkata 700 016<br> India -->

                    </p>
                </div>
                <!-- /.col-lg-3 -->
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <h4> <span class="glyphicon glyphicon-earphone"></span><a href="/contact-us">Contact</h4>
                    </a>
                    <ul>
						<li>Phone <a href="tel:+913340501000">+91 33 4050 1000</a></li>
						<li>Fax <a href="fax:+913340501075">+91 33 4050 1075</a></li>
                        <li>Email <a href="mailto:comments@jdjones.com">comments@jdjones.com</a></li>
                        <li>Connect with us &nbsp;
                            <a href="https://www.linkedin.com/company/jdjones" target="_blank">
                                <h4 style="display:inline-block;"><span class="fa fa-linkedin"></span>
                                </h4>
                            </a>
                            
                        </li>
                    </ul>
                </div>
                <!-- /.col-lg-3 -->
                <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                    <h4><span class="glyphicon glyphicon-download-alt"></span> Downloads</h4>
                    <ul>
                        <li><a href="/pdfs/Leaflet.pdf"
                                target="_blank">Product Catalogue</a></li>
                        <!--<li><a href="#">Newsletter May 2017</a></li>-->
                    </ul>
                </div>
                <!-- /.col-lg-2 -->
                <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                    <h4><span class="lineheightzero"><img
                                src="images/ico-jdjones.webp"
                                alt="JD Jones Events"></span> Events</h4>
                    <ul>
                        <!--<li><a href="#">Latest Events</a></li>-->
                        <li><a href="/upcoming-events">Upcoming Events</a></li>
						<li><a href="/past-events">Past Events</a></li>
                        <!--<li><img src="./sites/all/themes/contrib/jones/img/event-valveworld-2018.webp" alt="Valve World 2018"></li>-->
                    </ul>
                </div>
                <!-- /.col-lg-2 -->
               <!-- <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                    <h4><span class="fa fa-rss" aria-hidden="true"></span> Subscribe</h4>
                    <p>Subscribe to receive corporate &amp; division news, job postings and other updates.</p>
                </div>-->
                <!-- /.col-lg-2 -->
            </div>
            <!-- .container / .clearfix -->
            <div class="copyright col-lg-12 text-center"> <a href="https://www.markobrando.com/" style="list-style: none;color:#fff;" target="_blank"> Designed &amp; Powered by Marko & Brando &copy; 2023 </a>
            </div>
        </footer>
        <!-- #footer -->
    </div>
    <!-- .row -->
</div>
</div>


<!-- =========modal start============ -->

<div class="modal fade" id="myEnquireSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> </button>
</div>
<div class="modal-body aCenter black">
<!--<h2 class="modal-title" id="myModalLabel">Talking points &amp; trends for designer furniture</h2>-->
<h4 class="aCenter headline scarlet">Enquiry sent</h4>
    Thank you for your query, we will get back to you soon
</div>
</div>
</div>
</div>




<!-- =========modal end============== -->

<script type="text/javascript">
//![CDATA[
//jQuery(window).on('load', function() { // makes sure the whole site is loaded 
//jQuery('#status').delay(500).fadeOut(); // will first fade out the loading animation 
//jQuery('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
//jQuery('body').delay(350).css({'overflow':'visible'});
//})
//]]>
//jQuery(function(){
//SyntaxHighlighter.all();
//});
jQuery(window).load(function(){
jQuery('#carousel').flexslider({
animation: "slide",
controlNav: false,
animationLoop: false,
slideshow: false,
itemWidth: 109,
itemMargin: 21,
asNavFor: '#slider'
});

jQuery('#slider').flexslider({
animation: "slide",
controlNav: false,
animationLoop: false,
slideshow: false,
sync: "#carousel",
start: function(slider){
jQuery('body').removeClass('loading');
}
});
});
</script>
 
	
<script>
 var img = jQuery('.banner-bg').css('background-image');
// console.log(img);
 // img = img.replace(/(url\(|\)|")/g, '');

 //img = img.replace(/jpg/g, 'webp');
 //console.log(img);

//document.querySelector(".banner-bg").style.backgroundImage  = img;
</script>

<!-- render css -->


<script type="text/javascript">
document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/flexslider.min.css" />');
</script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js">
</script>

   <!-- =================================magnific js=================================== -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
    <script>
        $(document).ready(function () {
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title');
                    }
                }
            });
        });
    </script>
    <!-- ====================sticky nav========================= -->


<script>
  document.getElementById("general-enquiry").setAttribute("autocomplete", "nope");
</script>

<script>
    const start_time = new Date().getTime();
   
    $('form #edit-field-user-phone').on('keyup', function (e){
		e.preventDefault();
     //alert('not ');
		if (this.value.length > 1){
      var endTime = new Date().getTime();
      var timeDiff = endTime - start_time;
			console.log("timeDiff",timeDiff);
      document.querySelectorAll(".time-taken").forEach((e)=>{
	e.value = timeDiff; // set the time taken value to a hidden input field in the form
      })
		}
    });
  </script>


<script>
		
	
	
		$('#custom-functions-contact-form').validate( {
			  rules: {
				  fullname: {
					required: true,
				  },
				  phone: {
					required: true,
				  },
				  email: {
					required: true,
				  },
				  message: {
					required: false,
				  }
			  },
				submitHandler: function(form) {
					console.log($(form).serialize());
					$('#submit1').attr('disabled',true);
					if (grecaptcha.getResponse()) {
							form.submit();
					}else{
						grecaptcha.reset();
						grecaptcha.execute();
					}           
				}
			});
	
	
</script>


<script>
		
	
	
		$('#general-enquicry').validate( {
			  rules: {
				  name: {
					required: true,
				  },
				  phone: {
					required: true,
				  },
				  email: {
					required: true,
				  },
				  country: {
					required: true,
				  },
				  message: {
					required: false,
				  }
			  },
				submitHandler: function(form) {
					console.log($(form).serialize());
					$('#submitButton').attr('disabled',true);
					if (grecaptcha.getResponse()) {
							form.submit();
					}else{
						grecaptcha.reset();
						grecaptcha.execute();
					}           
				}
			});
	
	
</script>

<script>
    // Function to get parameter value from URL
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Update hidden input fields in all forms
    function updateHiddenInputs() {
        const srdValue = getUrlParameter('utm-source');
        const srdInputs = document.querySelectorAll('form input[type="hidden"][name="source"]');
        
        srdInputs.forEach((srdInput) => {
            srdInput.value = srdValue;
        });
    }

    // Call the updateHiddenInputs function when the page loads
    window.addEventListener('load', updateHiddenInputs);
</script>


</body>

</html>