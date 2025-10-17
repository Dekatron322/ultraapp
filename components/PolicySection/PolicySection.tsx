"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useEffect } from "react"

interface PrivacyPolicySectionProps {
  currentTheme: string | undefined
}

const PrivacyPolicySection = ({ currentTheme }: PrivacyPolicySectionProps) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const tapEffect = {
    scale: 0.98,
  }

  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId.replace("#", ""))
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Handle click on table of contents items
  const handleTableOfContentsClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    const html = document.documentElement
    html.style.scrollBehavior = "smooth"

    return () => {
      html.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <>
      <div className="flex w-full gap-8 max-md:px-4 md:max-w-[1240px]">
        {/* Main Content */}
        <div className="flex-1">
          <div className="mt-16 w-full gap-4">
            <motion.h2
              id="privacy-policy"
              className="mb-4 text-[46px] font-semibold leading-[1.2] max-sm:text-3xl"
              variants={fadeInUp}
            >
              Privacy Policy
            </motion.h2>

            <motion.h3 id="introduction" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              1. INTRODUCTION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                Ultra Multipurpose Technology Limited (&quot;Ultra&quot;, &quot;Company&quot;, &quot;we&quot;,
                &quot;us&quot; or &quot;our&quot;) is committed to maintaining the accuracy, confidentiality, and
                security of your personally identifiable information (&quot;Personal Information&quot;). As part of this
                commitment, our Privacy Policy (&quot;Policy&quot;) governs our actions as they relate to the
                collection, use and disclosure of Personal Information.
              </li>
              <li>
                This Privacy Policy governs your access to, and use of our Services, and your access to all forms of
                systems, operations and processes within the jurisdiction within which we operate that involve the
                collection, storage, use, transmission, and disposal of personal information. Before you use or submit
                any information through or in connection with our Services, please review this Policy carefully. By
                using our Services, you authorise the collection, use, storage, and disclosure of your data and
                information as outlined in this Policy and how they are collected and used by us.
              </li>
              <li>
                This Privacy Policy is strictly restricted to our Services, thus, it does not apply to Services that are
                not owned or controlled by us, including third-party websites, products and services. You are advised to
                read the terms of use, privacy policy and other policies of such third-parties.
              </li>
            </ul>
            <p className="smaller-text mb-4 font-semibold">
              IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY, PLEASE DO NOT USE OUR SERVICES. If you have any questions or
              concerns regarding this Privacy Policy, please contact us via email at support@myultraapp.com.
            </p>

            <motion.h3 id="definitions" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              2. DEFINITIONS AND INTERPRETATIONS
            </motion.h3>
            <p className="smaller-text mb-4">
              To ensure that you understand the terms used in this Privacy Policy, the following terms are referenced
              and defined below:
            </p>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>&quot;Cookies&quot;</strong> means a small amount of data generated by the website and saved by
                your browser application. It is used to identify your browser, provide analytics and remember
                information about you.
              </li>
              <li>
                <strong>&quot;Ultra&quot; &quot;Company&quot; &quot;we&quot; &quot;us&quot; or &quot;our&quot;</strong>{" "}
                means Ultra Multipurpose Technology Limited and its subsidiaries including any person or legal entity to
                whom the rights and/or obligations of the Company have been assigned.
              </li>
              <li>
                <strong>&quot;Content&quot;</strong> means the service and any materials, graphics, audiovisual files,
                processes and code, features, and functionality available on our website.
              </li>
              <li>
                <strong>&quot;Device&quot;</strong> means any electronic device connected to the internet which a person
                (natural or legal) uses to access our Site. It could be a phone, tablet, computer, or any other device
                capable of connecting to the internet and accessing our Services.
              </li>
              <li>
                <strong>&quot;PIN&quot;</strong> means Personal Identification Number.
              </li>
              <li>
                <strong>&quot;Account&quot;</strong> means a unique account created by you on our Website to access our
                Services or part of our Services.
              </li>
              <li>
                <strong>&quot;Personal information&quot;</strong> means any information that belongs to a customer. Such
                information includes but is not limited to name, telephone numbers, email address, location, Gender,
                Product Interest, bank account details, etc, of customers which makes them easily identifiable.
              </li>
              <li>
                <strong>&quot;Policy&quot;</strong> means this Privacy Policy.
              </li>
              <li>
                <strong>&quot;Services&quot;</strong> means the services offered by Ultra via the Website which
                includes: streamlining international money transactions seamlessly.
              </li>
              <li>
                <strong>&quot;User&quot; or &quot;You&quot; or &quot;Customer&quot; &quot;Your&quot;</strong> means
                individuals, corporate organisations, tech brands, tech enthusiasts and all other persons that in one
                way or the other access our Services.
              </li>
            </ul>

            <motion.h3 id="consent" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              3. CONSENT
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                Knowledge and consent are required for the collection, use or disclosure of Personal Information except
                where required or permitted by law. You have a choice to provide us with your Personal Information.
                However, your decision not to provide certain information may limit our ability to provide you with our
                Services.
              </li>
              <li>
                By accessing our website and using our Services in any manner, you confirm to us that you have read and
                accepted this Policy and consent to the data practices described in this Policy.
              </li>
            </ul>

            <motion.h3 id="information-collection" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              4. INFORMATION WE COLLECT
            </motion.h3>

            <motion.h4 className="mb-2 mt-6 text-xl font-semibold" variants={fadeInUp}>
              a) Personal Information
            </motion.h4>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We collect personal information that you voluntarily provide to us when you register to access our
                Services or when you contact us.
              </li>
              <li>
                We collect and process certain types of information such as: name, telephone numbers, gender,
                residential address, email address, communication preference, product interest etc. of our Users that
                makes them easily identifiable. These Users include both current and past registered Users, any other
                persons that in one way or the other that access our Services (&quot;Users&quot;) and other individuals
                whom we communicate or deal with.
              </li>
              <li>
                We also collect information which may be linked to you specifically such as your IP address, browser,
                device characteristics, operating system, language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services, and other technical information.
              </li>
            </ul>

            <motion.h4 className="mb-2 mt-6 text-xl font-semibold" variants={fadeInUp}>
              b) Financial Information:
            </motion.h4>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We collect financial information in order to facilitate money transfers. We may collect and store
                certain financial information such as bank account details, depending on the Services you use within the
                Website.
              </li>
            </ul>

            <motion.h4 className="mb-2 mt-6 text-xl font-semibold" variants={fadeInUp}>
              c) Cookies
            </motion.h4>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We use cookies to identify you as a User and make your User experience easier, customize our Website
                content and advertisements, and where applicable help you ensure that your account security is not
                compromised. We also use cookies to mitigate risk and prevent fraud, promote trust and safety on our
                website. Cookies allow our servers to remember IP addresses, date and time of visits, monitor web
                traffic, and prevent illegal activities from being perpetrated through our Services. Our cookies do not
                store personal or sensitive information. They simply hold a unique random reference to you so that once
                you visit our Website, we can recognize who you are and provide certain content to you.
              </li>
              <li>
                If your browser or browser add-on permits, you have the choice to disable cookies on our website,
                however this may impact your experience with using our Website.
              </li>
            </ul>

            <motion.h4 className="mb-2 mt-6 text-xl font-semibold" variants={fadeInUp}>
              d) Device Data
            </motion.h4>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We collect device data such as information about your computer, phone, tablet, or other device that you
                use to access our Website. Depending on the device used, this device data may include information such
                as your IP address (or proxy server), device and application identification numbers, location, browser
                type, hardware model, Internet service provider and/or mobile carrier, operating system, and system
                configuration information.
              </li>
            </ul>

            <motion.h4 className="mb-2 mt-6 text-xl font-semibold" variants={fadeInUp}>
              e) Location Data
            </motion.h4>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We collect location data such as information about your device&apos;s location. How much information we
                collect depends on the type and settings of the device you use to access our Website. For example, we
                may use GPS and other technologies to collect geolocation data that tells us your current location
                (based on your IP address). You can opt out of allowing us to collect this information either by
                refusing access to the information or by disabling your location setting on your device. However, if you
                choose to opt-out, you may not be able to use certain aspects of our Website.
              </li>
            </ul>

            <motion.h3 id="purpose-limitation" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              5. PURPOSE LIMITATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We collect personal information only for certain identified purposes and for which consent has been
                obtained. Such personal information cannot be reused for another purpose that is incompatible with the
                original purpose, except we obtain your consent for such use.
              </li>
              <li>
                With your consent, we may collect Personal Information from you in person, over the telephone, or by
                communicating with you via email, text messages, or the internet.
              </li>
            </ul>

            <motion.h3 id="data-minimization" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              6. DATA MINIMIZATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We limit data collection and usage to information that is relevant, adequate and is absolutely necessary
                for carrying out the purpose for which the data is processed. We will evaluate to what extent the
                necessity of processing your data is required and where the purpose allows, anonymized data will be
                used.
              </li>
            </ul>

            <motion.h3 id="why-collect" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              7. WHY WE COLLECT YOUR INFORMATION
            </motion.h3>
            <p className="smaller-text mb-4">Ultra collects your personal information to do the following:</p>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>Provide you with the required services;</li>
              <li>Create and manage your User profiles;</li>
              <li>
                Personalise the Website, i.e. identifying your interests and recommending offers that may be of interest
                to you;
              </li>
              <li>Respond to your questions or requests;</li>
              <li>Improve features, Website content and analyse data to develop our Services;</li>
              <li>Address inappropriate use of our Website;</li>
              <li>
                Prevent, detect and manage risk against misinformation, wrong use, fraudulent and illegal activities
                using internal and third-party screening tools;
              </li>
              <li>
                Send you marketing content, newsletters and service updates curated by us, however, we will provide you
                with an option to unsubscribe if you do not want to hear from us;
              </li>
              <li>
                Verify your identity and the information you provide in line with our statutory obligations using
                internal and third-party tools;
              </li>
              <li>Maintain up-to-date records;</li>
              <li>Carry out troubleshooting, data analysis, testing, and for statistical purposes.</li>
              <li>
                Resolve disputes that may arise, including investigations by law enforcement or regulatory bodies and
                for any other purpose that we disclose to you while providing our Services to you.
              </li>
            </ul>

            <motion.h3 id="legal-basis" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              8. LEGAL BASIS WE RELY ON TO PROCESS YOUR INFORMATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We only process your personal information when we have a valid legal reason (i.e legal basis) to do so
                under applicable laws, e.g with your consent, to comply with the laws, to provide you with our Services,
                to enter into and/or fulfil our contractual obligations, to protect your rights, or to fulfil our
                legitimate business interests.
              </li>
              <li>
                We may rely on the following legal basis to process your personal information:
                <ul className="list-circle mt-2 space-y-2 pl-6">
                  <li>
                    <strong>Consent</strong> - We may process your information if you have given us permission (i.e.
                    consent) to use your personal information for a specific purpose. You can withdraw your consent at
                    any time by notifying us.
                  </li>
                  <li>
                    <strong>Legal Obligations</strong> - We may process your information where we believe it is
                    necessary for compliance with our legal obligations, such as but not limited to:
                    <ul className="list-circle mt-2 space-y-2 pl-6">
                      <li>Cooperating with a law enforcement body or regulatory agency,</li>
                      <li>
                        Complying with relevant regulations and policies that apply to our Services and businesses.
                      </li>
                      <li>Exercising or defending our legal rights, or</li>
                      <li>
                        Disclosing your information as evidence in a competent court, tribunal, or in compliance during
                        an investigation (internal or external), compliance with any court and/or tribunal order or
                        compliance with relevant regulatory and government authorities (both local and international
                        bodies).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Vital Interests</strong> - We may process your information where we believe it is necessary to
                protect your vital interests or the vital interests of our Users, such as but not limited to situations
                involving potential threats to the safety of our Users.
              </li>
            </ul>

            <motion.h3 id="sharing-information" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              9. HOW WE SHARE YOUR PERSONAL INFORMATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                In the course of providing our Services to you, we may engage the Services of a third-party processor to
                process your personal information. The processing by such third-parties shall be governed by a written
                contract with us to ensure adequate protection and security measures are put in place by the third party
                for the protection of your personal information in accordance with the terms of this Privacy Policy.
              </li>
              <li>
                We do not sell or trade personal information with third-parties. However, to enable us render our
                Services to you, we may share your information with trusted third-parties. We may disclose your personal
                information in compliance with applicable law or a legal obligation to which we are bound. Please note
                that third-party sites you engage with through our Services will have their privacy policies, and we are
                therefore not responsible for their actions, including their information protection practices. The use
                of your information by such third parties will be subject to their Privacy Policy, which you should
                carefully review.
              </li>
              <li>
                We may retain or disclose your personal information in order to:
                <ul className="list-circle mt-2 space-y-2 pl-6">
                  <li>Comply with applicable laws and regulations;</li>
                  <li>Comply with a court and/or tribunal order, subpoena, or other legal processes;</li>
                  <li>Comply with an investigation (internal or external);</li>
                  <li>
                    Respond to a lawful request by a government authority, law enforcement agency, or similar government
                    body (whether situated in our Users jurisdiction or elsewhere).
                  </li>
                  <li>
                    Engage with third-party service providers and/or subcontractors who provide services for the
                    Company&apos;s business operations, a list of which can be received upon request.
                  </li>
                  <li>
                    Inform third-parties aggregated or de-identified information about Users for marketing, advertising,
                    research, or other purposes;
                  </li>
                  <li>
                    Transfer data to another entity if the company is acquired by or merged with another company, if the
                    company sells or transfers a business unit or assets to another company, as part of a bankruptcy
                    proceeding, or as part of any other similar business transfer: or
                  </li>
                  <li>
                    If we believe that the disclosure of your information is appropriate to comply with relevant laws,
                    to enforce or apply our terms and other agreements, or protect the rights, property, or security of
                    our business, Users, affiliates, employees, or representatives. These include exchanging information
                    with other companies and organisations for fraud detection and prevention and risk mitigation and/or
                    reduction.
                  </li>
                </ul>
              </li>
              <li>
                When we share your information with third parties as specified above, we require such recipients to
                agree to only use the Personal Information we share with them in accordance with this Privacy Policy and
                the Company&apos;s contractual specifications and for no other purpose than those determined by the
                Company in line with this Policy.
              </li>
            </ul>

            <motion.h3 id="data-retention" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              10. HOW LONG WE KEEP YOUR INFORMATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We keep your information for as long as necessary to fulfil the purposes outlined in this Policy unless
                otherwise required by applicable laws. We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Policy unless a longer retention period is required or
                permitted by law (such as tax, accounting, or other legal requirements). Except as specifically stated
                in this Policy, we will not keep your personal information for longer than the period provided for by
                Applicable Law.
              </li>
              <li>
                The length of storage of your personal information shall, amongst other things, be determined by:
                <ul className="list-circle mt-2 space-y-2 pl-6">
                  <li>
                    The contract terms agreed between us or as long as it is needed for the purpose for which it was
                    obtained;
                  </li>
                  <li>
                    Whether the transaction or relationship has statutory implication or a required retention period;
                  </li>
                  <li>
                    Whether there is an express request for deletion of the personal information by you, provided that
                    such request will only be treated where you are not under any investigation that may require us to
                    retain such personal information or there is no subsisting contractual arrangement with you that
                    would require the processing of the personal information;
                  </li>
                  <li>
                    Whether we have other lawful basis for retaining that information beyond the period for which it is
                    necessary to serve the original purpose;
                  </li>
                </ul>
              </li>
              <li>
                When we have no ongoing legitimate business need to process your personal information, we will either
                delete or anonymize such information, or, if this is not possible (for example, because your personal
                information has been stored in backup archives), then we will securely store your personal information
                and isolate it from any further processing until deletion is possible.
              </li>
            </ul>

            <motion.h3 id="data-security" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              11. HOW DO WE KEEP YOUR INFORMATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We shall continually put in place mechanisms to protect the integrity and confidentiality of your
                personal information, both in digital and physical format and to prevent your personal information from
                being accidentally or deliberately compromised. We are committed to managing your personal information
                in line with global industry best practices. We protect your personal information using technical and
                organisational measures to reduce the risks of loss, misuse, unauthorised access, disclosure and
                alteration.
              </li>
              <li>
                We also use industry-recommended security protocols to safeguard your personal information. Other
                security safeguards include but are not limited to: data encryption, firewalls, and physical access
                controls to our building, files, cloud storage, and granting access to your personal information to only
                our employees who require it to fulfill their job responsibilities. No personal information processing
                will be undertaken by our employee who has not been authorised to carry out such as part of their
                legitimate duties.
              </li>
            </ul>

            <motion.h3 id="privacy-rights" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              12. PRIVACY RIGHTS
            </motion.h3>
            <p className="smaller-text mb-4">
              If your personal information is held by us, you are entitled to reach out to us to exercise the following
              rights:
            </p>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>Request a rectification and modification of your personal information which we keep;</li>
              <li>Request the movement of your data from us to a third party.</li>
              <li>
                Object to and request that we restrict the processing of your personal information. We shall inform you
                of the effect of such restrictions and how they will affect our Services to you. Your request will be
                reviewed by us and carried out except as restricted by law or our statutory obligations. You may review
                and update your Personal Information directly on our Website or by contacting us via email.
              </li>
              <li>
                Opt out of receiving newsletters and other non-essential messages by using the unsubscribe link included
                in all such messages. However, you will continue to receive notices and essential transactional emails;
              </li>
              <li>
                Disable browser cookies before visiting our Website. However, if you do so, you may not be able to use
                certain features of the Website properly;
              </li>
              <li>
                Request access to the personal information we collect from you, change the information or delete it. To
                request to review, update, or delete your personal information, please send us an email at
                <Link href="mailto:support@myultraapp.com">support@myultraapp.com</Link>.
              </li>
            </ul>

            <motion.h3 id="age-restriction" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              13. AGE RESTRICTION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                Our Website and Services are directed to persons from the ages of 18 years and above. If you are below
                the age of 18 you must obtain the consent of your parent or guardian to use our Services. If we become
                aware that a child (&quot;minor&quot;) under 18 years has provided us with personal information, we will
                take steps to delete such information and shall NOT be held liable for the actions of minors who access
                our Website.
              </li>
              <li>
                If as a parent or guardian, you become aware that your child or ward has provided us with any personal
                information without your consent, please contact us via email at{" "}
                <Link href="mailto:support@myultraapp.com">support@myultraapp.com</Link>.
              </li>
            </ul>

            <motion.h3 id="business-transfer" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              14. CHANGE OR TRANSFER OF BUSINESS OWNERSHIP
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                In the event that we sell our company or get acquired or merged with another entity, we will ensure that
                the acquiring entity is legally bound to honor our commitments to you. We will notify you via email or
                through a notice on our Website of any change in ownership or the use of your personal information or
                service data. We will also notify you about any choices you may have regarding your personal information
                and service data. This Policy may be updated to accommodate such transactions.
              </li>
            </ul>

            <motion.h3 id="updates" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              15. UPDATES AND MODIFICATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                We reserve the right to update, modify, change or revise this Privacy Policy from time to time. The
                updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be
                effective as soon as it is uploaded on our Website. If we make material changes to this Privacy Policy,
                we may notify you either by prominently posting a notice of such changes or by directly sending you a
                notification. We encourage you to review this Policy frequently in order to be informed of how we are
                protecting your information.
              </li>
            </ul>

            <motion.h3 id="contact" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              16. CONTACT US
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                If you have questions or comments about this notice, you may contact us by sending a mail to us via
                email at support@myultraapp.com.
              </li>
            </ul>
          </div>
        </div>

        {/* Table of Contents - Fixed Position on the Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="sticky top-20 hidden h-fit w-64 lg:block"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg p-6 backdrop-blur-sm">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mb-4 text-xl font-bold"
            >
              Table of Contents
            </motion.h2>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" animate="show">
              {[
                { href: "#introduction", text: "1. Introduction" },
                { href: "#definitions", text: "2. Definitions" },
                { href: "#consent", text: "3. Consent" },
                { href: "#information-collection", text: "4. Information Collection" },
                { href: "#purpose-limitation", text: "5. Purpose Limitation" },
                { href: "#data-minimization", text: "6. Data Minimization" },
                { href: "#why-collect", text: "7. Why We Collect" },
                { href: "#legal-basis", text: "8. Legal Basis" },
                { href: "#sharing-information", text: "9. Sharing Information" },
                { href: "#data-retention", text: "10. Data Retention" },
                { href: "#data-security", text: "11. Data Security" },
                { href: "#privacy-rights", text: "12. Privacy Rights" },
                { href: "#age-restriction", text: "13. Age Restriction" },
                { href: "#business-transfer", text: "14. Business Transfer" },
                { href: "#updates", text: "15. Updates" },
                { href: "#contact", text: "16. Contact Us" },
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInRight}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleTableOfContentsClick(e, item.href)}
                    className="small-text text-hover block transition-colors duration-200"
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={tapEffect}
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default PrivacyPolicySection
