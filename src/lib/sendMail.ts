import { transporter } from "./mail";

export const sendEmailVerificationToken = async (
  email: string,
  name: string,
  title: string,
  description: string
) => {
  const data = new Date();
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: "karansharma40692@gmail.com, shivamkumararya1121@gmail.com",
    cc: "buddycodeoffical@gmail.com, muskansankritya2127@gmail.com", // Optional: Add CC recipients
    subject: "Demand for Service",
    text: "Check username & details",
    html: `<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }

        .image_block img+div {
            display: none;
        }

        sup,
        sub {
            line-height: 0;
            font-size: 75%;
        }

        @media (max-width:670px) {
            .desktop_hide table.icons-inner {
                display: inline-block !important;
            }

            .icons-inner {
                text-align: center;
            }

            .icons-inner td {
                margin: 0 auto;
            }

            .image_block div.fullWidth {
                max-width: 100% !important;
            }

            .mobile_hide {
                display: none;
            }

            .row-content {
                width: 100% !important;
            }

            .stack .column {
                width: 100%;
                display: block;
            }

            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
                display: table !important;
                max-height: none !important;
            }

            .row-3 .column-1 .block-1.spacer_block {
                height: 50px !important;
            }

            .row-1 .column-1 .block-1.image_block .alignment div {
                margin: 0 auto !important;
            }

            .row-3 .column-1 .block-2.divider_block td.pad {
                padding: 0 25px !important;
            }

            .row-3 .column-1 .block-2.divider_block .alignment table {
                display: inline-table;
            }

            .row-3 .column-1 .block-4.spacer_block,
            .row-7 .column-1 .block-1.spacer_block {
                height: 30px !important;
            }

            .row-3 .column-1 .block-3.paragraph_block td.pad {
                padding: 10px 25px 0 !important;
            }

            .row-3 .column-1 .block-6.spacer_block {
                height: 10px !important;
            }

            .row-3 .column-1 .block-7.paragraph_block td.pad>div,
            .row-3 .column-1 .block-8.paragraph_block td.pad>div {
                font-size: 36px !important;
            }

            .row-3 .column-1 .block-11.spacer_block,
            .row-4 .column-1 .block-1.spacer_block,
            .row-4 .column-2 .block-1.spacer_block,
            .row-4 .column-3 .block-1.spacer_block {
                height: 20px !important;
            }

            .row-3 .column-1 .block-13.paragraph_block td.pad>div,
            .row-6 .column-1 .block-2.paragraph_block td.pad>div {
                font-size: 14px !important;
            }

            .row-5 .column-1 .block-2.paragraph_block td.pad>div,
            .row-6 .column-1 .block-1.paragraph_block td.pad>div {
                font-size: 16px !important;
            }

            .row-5 .column-1 .block-2.paragraph_block td.pad,
            .row-6 .column-1 .block-1.paragraph_block td.pad {
                padding: 5px 0 !important;
            }

            .row-6 .column-1 .block-2.paragraph_block td.pad {
                padding: 5px 25px 10px !important;
            }

            .row-8 .column-1 .block-1.spacer_block,
            .row-9 .column-1 .block-1.spacer_block {
                height: 35px !important;
            }

            .row-6 .column-1 {
                padding: 30px 15px 25px !important;
            }
        }
    </style>
    <!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]--><!--[if true]><style>.forceBgColor{background-color: white !important}</style><![endif]-->
</head>

<body class="body forceBgColor"
    style="background-color: transparent; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: transparent; background-size: auto; background-image: none; background-position: top left; background-repeat: no-repeat;"
        width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                        width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="left" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div style="max-width: 650px;"><a href="#"
                                                                            style="outline:none" tabindex="-1"
                                                                            target="_blank"><img alt="Logo"
                                                                                height="auto"
                                                                                src="https://ik.imagekit.io/bc/Images/companyLogo.svg?updatedAt=1728706903972"
                                                                                style="display: block; height: auto; border: 0; width: 100%;"
                                                                                title="Logo" width="650" /></a></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #f6f5f1; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div style="max-width: 650px;"><img height="auto"
                                                                            src="https://ik.imagekit.io/bc/Images/BEE_May20_MarketingAgency_Invoice_v01.jpg?updatedAt=1728147272025"
                                                                            style="display: block; height: auto; border: 0; width: 100%;"
                                                                            width="650" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                        width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #007c86; background-image: url('https://ik.imagekit.io/bc/Images/BEE_May20_MarketingAgency_Onboarding_v01_copy.jpg?updatedAt=1728147273260'); background-repeat: no-repeat; background-size: cover; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:60px;line-height:60px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="divider_block block-2 mobile_hide" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-left:60px;padding-right:60px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                        width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner"
                                                                                style="font-size: 1px; line-height: 1px; border-top: 1px solid #ffffff;">
                                                                                <span
                                                                                    style="word-break: break-word;"> </span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-3 mobile_hide" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-left:60px;padding-right:60px;padding-top:10px;">
                                                                <div
                                                                    style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:2px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
                                                                    <p style="margin: 0;">SERVICEMAIL         
                                                                                                          ${data.toDateString()}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div class="spacer_block block-4 mobile_hide"
                                                        style="height:80px;line-height:80px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-5" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div style="max-width: 65px;"><img height="auto"
                                                                            src="https://ik.imagekit.io/bc/Images/3_Green_Sparkles.png?updatedAt=1728147242813"
                                                                            style="display: block; height: auto; border: 0; width: 100%;"
                                                                            width="65" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div class="spacer_block block-6"
                                                        style="height:20px;line-height:20px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-7" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:60px;font-weight:700;letter-spacing:-1px;line-height:120%;text-align:center;mso-line-height-alt:72px;">
                                                                    <p style="margin: 0;">Demand for </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-8" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#ffffff;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:60px;font-weight:400;letter-spacing:-1px;line-height:120%;text-align:center;mso-line-height-alt:72px;">
                                                                    <p style="margin: 0; word-break: break-word;">
                                                                        <em>${title}</em></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div class="spacer_block block-9"
                                                        style="height:10px;line-height:10px;font-size:1px;"> </div>
                                                    <div class="spacer_block block-10"
                                                        style="height:20px;line-height:20px;font-size:1px;"> </div>
                                                    <div class="spacer_block block-11"
                                                        style="height:40px;line-height:40px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-12" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div class="fullWidth" style="max-width: 650px;">
                                                                        <img height="auto"
                                                                            src="https://ik.imagekit.io/bc/Images/Welcome_Thread.png?updatedAt=1728147244286"
                                                                            style="display: block; height: auto; border: 0; width: 100%;"
                                                                            width="650" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-13" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-left:60px;padding-right:60px;padding-top:10px;">
                                                                <div
                                                                    style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                                                                     </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                        role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f5f1; background-image: url('https://ik.imagekit.io/bc/Images/Orange_BG_Gradient.jpg?updatedAt=1728147259414'); background-repeat: no-repeat; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="41.666666666666664%">
                                                    <div class="spacer_block block-1"
                                                        style="height:40px;line-height:40px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="16.666666666666668%">
                                                    <div class="spacer_block block-1"
                                                        style="height:40px;line-height:40px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="41.666666666666664%">
                                                    <div class="spacer_block block-1"
                                                        style="height:40px;line-height:40px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f5f1; background-image: url('https://ik.imagekit.io/bc/Images/Orange_BG_Gradient.jpg?updatedAt=1728147259414'); background-repeat: no-repeat; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1 mobile_hide"
                                                        style="height:15px;line-height:15px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#222222;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:30px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
                                                                    <p style="margin: 0;">Name & Description</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                        role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://ik.imagekit.io/bc/Images/BEE_May20_MarketingAgency_Onboarding_v02_copy.jpg?updatedAt=1728147272769'); background-position: top center; background-repeat: no-repeat; background-size: auto;"
                        width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                        role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-size: auto; border-bottom: 15px solid transparent; border-left: 30px solid transparent; border-right: 30px solid transparent; border-top: 15px solid transparent; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 25px; padding-left: 25px; padding-right: 25px; padding-top: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#222222;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:30px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
                                                                    <p style="margin: 0;">${name}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="paragraph_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#222222;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">${description}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                     <table border="0" cellpadding="10" cellspacing="0"
                                                        class="paragraph_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#222222;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">${email}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: top center; background-repeat: no-repeat; border-radius: 0; color: #000000; background-image: url('https://ik.imagekit.io/bc/Images/BEE_May20_MarketingAgency_Onboarding_v06_copy.jpg?updatedAt=1728147272309'); background-size: auto; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:60px;line-height:60px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #f6f5f1; background-image: url('https://ik.imagekit.io/bc/Images/BG-texture-02.jpg?updatedAt=1728147257373'); background-repeat: no-repeat; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:80px;line-height:80px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #f6f5f1; background-image: url('https://ik.imagekit.io/bc/Images/BG-texture-02.jpg?updatedAt=1728147257373'); background-repeat: no-repeat; width: 650px; margin: 0 auto;"
                                        width="650">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:50px;line-height:50px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 
</body>

</html>`,
  };

  try {
    const sendInfo = await transporter.sendMail(mailOptions);
    return sendInfo;
  } catch (error) {
    console.log(error);

    return null;
  }
};


