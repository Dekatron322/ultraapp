"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useEffect } from "react"

interface TermsSectionProps {
  currentTheme: string | undefined
}

const TermsSection = ({ currentTheme }: TermsSectionProps) => {
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
              id="terms-condition"
              className="mb-4 text-[46px] font-semibold leading-[1.2] max-sm:text-3xl"
              variants={fadeInUp}
            >
              Terms & Conditions
            </motion.h2>

            <p className="smaller-text mb-4">
              Welcome to Ultra! This &apos;Terms and Conditions&apos; is a contract between you and Ultra Multipurpose
              Technology Limited (together referred to as &quot;Ultra&quot; &quot;we&quot; &quot;our&quot;). It
              describes the terms by which you will be bound when you use Ultra (&quot;the Service&quot; or &quot;Ultra
              App&quot;).
            </p>

            <p className="smaller-text mb-4">
              Do not use this Service if you do not agree to be bound by these terms. By using the Service you are
              agreeing to the terms of this Agreement as well as our Privacy Policy.
            </p>

            <p className="smaller-text mb-4">
              We may revise these Terms and Conditions and any of the policies from time to time. The revised version
              will be effective once uploaded on Ultra Website or Mobile Application.
            </p>

            <motion.h3 id="definitions" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              1. DEFINITIONS
            </motion.h3>
            <p className="smaller-text mb-4">The following definitions relate to these Terms and conditions:</p>

            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>&quot;Account&quot; or &quot;Wallet&quot;</strong> is an electronic stored value Account created
                for use by the customer. Credits, debits and charges are applied to this Account. The Account is
                primarily accessed through your laptop, mobile phone or any other mobile device via the Ultra App.
              </li>
              <li>
                <strong>&quot;Agent&quot;</strong> refers to any party or device, including authorised Ultra Agents,
                that facilitate Ultra transactions on behalf of customers.
              </li>
              <li>
                <strong>&quot;Agreement&quot;</strong> refers to these Terms and Conditions.
              </li>
              <li>
                <strong>&quot;BVN&quot;</strong> means Bank Verification Number used by the banking industry in Nigeria
                and issued by a CBN-approved financial institution.
              </li>
              <li>
                <strong>&quot;CBN&quot;</strong> means the Central Bank of Nigeria.
              </li>
              <li>
                <strong>&quot;Content&quot;</strong> means all information whether textual, visual, audio or otherwise,
                appearing on or available on the Ultra Website or Mobile Application.
              </li>
              <li>
                <strong>&quot;Credit&quot;</strong> means the movement of funds into an Account or Wallet.
              </li>
              <li>
                <strong>&quot;Debit&quot;</strong> means the movement of funds out of an Account or Wallet.
              </li>
              <li>
                <strong>&quot;Merchant&quot;</strong> means any person or entity who offers and or accepts payment for
                goods or services using the Service.
              </li>
              <li>
                <strong>&quot;Ultra App&quot;</strong> means the service available on the Ultra Mobile Application.
              </li>
              <li>
                <strong>&quot;Mobile Phone&quot;</strong> means a GSM or CDMA device, which can make and receive
                telephone calls and send and receive SMSs, among other communication options.
              </li>
              <li>
                <strong>&quot;OTP&quot;</strong> means One Time Password, used to authorise transactions or processes.
              </li>
              <li>
                <strong>&quot;PIN&quot;</strong> means Personal Identification Number.
              </li>
              <li>
                <strong>&quot;Recipient&quot;</strong> means a person who receives money through the Service.
              </li>
              <li>
                <strong>&quot;Sender&quot;</strong> means a person who uses the Service to send money.
              </li>
              <li>
                <strong>&quot;Services&quot;</strong> refer to any products and services provided to the customer.
              </li>
              <li>
                <strong>&quot;Transaction&quot;</strong> refers to an order to send money through the Service.
              </li>
              <li>
                <strong>&quot;Transaction Amount&quot;</strong> is the amount of money that the Sender provides to Ultra
                for transmission to the Recipient.
              </li>
              <li>
                <strong>&quot;Wallet&quot;</strong> means an electronic stored value Account on Ultra App used to
                perform transactions.
              </li>
              <li>
                <strong>&quot;Payout Amount&quot;</strong> is the amount paid out to the Recipient.
              </li>
              <li>
                <strong>&quot;Ultra&quot; &quot;We&quot; &quot;us&quot; and &quot;our&quot;</strong> means Ultra
                Multipurpose Technology Limited, and any person or legal entity to whom the rights and/or obligations of
                Ultra has been assigned to.
              </li>
              <li>
                <strong>&quot;You&quot; &quot;user&quot; &quot;your&quot; and &quot;customer&quot;</strong> means any
                person who creates an Account on the Ultra App and accesses any or all of our services.
              </li>
            </ul>

            <motion.h3 id="eligibility" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              2. ELIGIBILITY FOR THE SERVICE
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Age and Capacity:</strong> You must be at least eighteen (18) years old to create an Account,
                access, or use the Service as a Sender. You must be able to form legally binding contracts under
                applicable law. Other restrictions may apply.
              </li>
              <li>
                <strong>Others:</strong> You may not submit or receive a Transaction on behalf of any other person.
              </li>
              <li>
                <strong>Residence within Nigeria:</strong> The Service is available to residents of Nigeria only.
              </li>
              <li>
                <strong>Offer and Acceptance:</strong> If you submit a Transaction, you are requesting that we process
                your Transaction, however we may accept or reject your offer at our sole discretion.
              </li>
              <li>
                <strong>Multiple Accounts:</strong> Senders may have only one active Account. If we determine that a
                Sender is using multiple Accounts we reserve the right to merge or terminate one or more of the
                Accounts, limit the Sender&apos;s use of the Service, or refuse their continued use of the Service.
              </li>
            </ul>

            <motion.h3 id="registration" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              3. REGISTRATION OF ACCOUNT AND CONDITION OF USE
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                To get started with Ultra, you must download the app, follow the registration process, and complete the
                required verification steps. As part of the signup process, you will need to accept these Terms and
                Conditions and our Privacy Policy, and you must have legal capacity to accept the same. If you wish to
                access additional services, you may be asked to accept additional terms and conditions.
              </li>
              <li>
                If you are an individual, you must be aged 18 years or older to use the Services and by registering an
                Account through the Service you declare that you are 18 years or above.
              </li>
              <li>
                You must provide all information as may be requested by us, such as your name, BVN, residential address,
                email address, phone number, next of kin details, business details and such other information as we may
                request from time to time (collectively, &quot;User Information&quot;).
              </li>
              <li>
                You agree to promptly notify us of changes to your User Information by updating your profile on the
                Ultra App and to notify us within five business days before any changes to your bank Account
                information, including, but not limited to, the closure of your bank Account for any reason. If We
                approve your registration, you will be authorised to use the Account created by you, subject to these
                terms.
              </li>
              <li>
                You may only add payment instruments (such as bank Accounts, credit or debit cards) to your Ultra
                Account if you are the named holder of that payment instrument. We take any violation of this
                requirement very seriously and will treat any attempt to add a payment instrument of which you are not
                the named holder as a fraudulent act prohibited by these Terms. In the event that you breach the
                provision of this clause, we reserve the right to deny you access to your Account and may suspend
                providing our services to you.
              </li>
            </ul>

            <motion.h3 id="payment-fees" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              4. PAYMENT OF FEES FOR THE SERVICE
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Charges:</strong> With each Transaction you submit you are agreeing to pay us a service fee
                (&quot;Service Fee&quot;), in addition to the Transaction Amount. Payment is due at the time the
                transaction is submitted for processing. If you submit a transaction that results in Ultra being charged
                non-sufficient funds (NSF) fees, chargeback fees, or other similar costs, you agree to reimburse Ultra
                for all such fees.
              </li>
              <li>
                <strong>Payment:</strong> In order for Ultra to process your transaction you authorise us to charge any
                of the payment instruments included in your payment profile (&quot;Payment Instrument&quot; includes any
                credit card, debit card, or bank Account). If your payment fails, you authorise us to re-try one or more
                times using the same Payment Instrument. You warrant that you are an authorised and lawful user of the
                Payment Instrument(s).
              </li>
              <li>
                <strong>Other Charge:</strong> We are not responsible for fees that may be imposed by financial
                institutions associated with your Payment Instruments. Ultra is not responsible for any NSF fees,
                chargeback fees, or other, similar charges that might be imposed on you by your bank, debit card issuer,
                or other provider.
              </li>
            </ul>

            <motion.h3 id="license-restrictions" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              5. GRANT OF LICENCE AND SERVICE RESTRICTIONS
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                In consideration of you agreeing to abide by these Terms, we grant you a non-transferable, non-exclusive
                licence to use and access our services on your mobile and electronic devices. We reserve all other
                rights. except as expressly set out in this Agreement or as permitted by any law governing the
                jurisdictions within which we operate.
              </li>
              <li>
                You agree to the following:
                <ul className="list-circle mt-2 space-y-2 pl-6">
                  <li>not to rent, lease, sub-license, loan, translate, merge, adapt, vary or modify Ultra App.</li>
                  <li>
                    not to make alterations to, or modifications of the whole or any part of the Ultra Application to be
                    combined with, or become incorporated in, any other programs.
                  </li>
                  <li>
                    not to disassemble, decompile, reverse-engineer, or create derivative works based on the whole or
                    any part of Ultra App or attempt to do any such thing except to the extent that such actions cannot
                    be prohibited because they are essential for the purpose of achieving interoperability of the
                    services with another software program, and provided that the information obtained by you during
                    such activities is not disclosed or communicated to any third party without our prior written
                    consent; and is not used to create any software that is substantially similar to the service.
                  </li>
                  <li>
                    to comply with all technology control or Export Laws and Regulations in your country that apply to
                    the technology used or supported by Ultra App.
                  </li>
                </ul>
              </li>
              <li>
                Ultra reserves the right to refuse any Transaction or limit the amount to be transferred, either on a
                per transaction or aggregated basis. These limits may be imposed on individual Accounts or linked
                Accounts. Furthermore, we reserve the right at any time to modify or discontinue all or any part of the
                Service.
              </li>
              <li>
                Your Transaction may be delayed by our effort to verify your identity and validate your Payment
                Instruments and otherwise comply with laws or manage our financial risk. You may be entitled to a refund
                in certain circumstances and you may cancel your transaction at any time while it is pending.
              </li>
              <li>You should not use the Service to send money except to people that you know.</li>
              <li>
                We are not responsible for the quality or delivery of goods or services that you pay for using the
                Service. You accept that using the Service to pay for goods and services is at your own risk.
              </li>
            </ul>

            <motion.h3 id="unauthorized-transactions" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              6. UNAUTHORISED TRANSACTIONS
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                You may not use the Service in violation of this Agreement or applicable laws, rules or regulations. It
                is a violation of the Agreement to use the Service for any of the following:
                <ul className="list-circle mt-2 space-y-2 pl-6">
                  <li>sexually-oriented materials or services;</li>
                  <li>gambling activities;</li>
                  <li>
                    fraud, money-laundering, the funding of terrorist organisations, or the purchase or sale of
                    firearms, hard drugs, or other controlled substances;
                  </li>
                  <li>
                    payment for multi-level marketing, pyramid selling or ponzi schemes, matrix programmes or other
                    &quot;get rich quick&quot; schemes or high yield investment programmes and for such activities not
                    listed here but are defined as illegal by the CBN and laws of the Federal Republic of Nigeria.
                  </li>
                </ul>
              </li>
              <li>
                If you use the Service in connection with illegal conduct, Ultra will not hesitate to terminate your
                Account and report you to law enforcement agencies.
              </li>
              <li>
                Your Payment Instrument must be issued by an approved financial institution. We may refuse Transactions
                from certain Senders and to certain Recipients that are included on the Specially Designated Nationals
                list, Non-cooperative Countries and Territories list, and such other lists as issued by different
                government agencies.
              </li>
            </ul>

            <motion.h3 id="personal-information" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              7. PERSONAL INFORMATION
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                To meet our Know Your Customer (&quot;KYC&quot;) and Anti-Money Laundering (&quot;AML&quot;)
                obligations, we may require you to provide any or all the following information: your full name, date of
                birth, Bank Verification Number, current residential address, copy of a valid Government issued ID
                (national ID, international passport, permanent voter&apos;s card or driver&apos;s licence) and any
                other information or document as we may require for our internal risk assessment.
              </li>
              <li>
                You warrant that all information and documentation provided to us is true, correct, and accurate. You
                also undertake to notify us of any changes to the information or documentation which you have provided.
              </li>
              <li>
                You agree and authorise Ultra to verify information provided by you against the information held by any
                third party (including official databases) such as, NIBBS, Payment System Providers or any other data
                verification organisation available to Ultra.
              </li>
              <li>
                The information that Ultra may verify against the information which you have provided to us include
                (without limitation): your name, phone number, date of birth, address, age, Identification Number
                (&quot;ID&quot;) or Passport Number and such other information that will enable Ultra to identify you
                and comply with the regulatory &quot;Know Your Customer&quot; requirements (together the &quot;Personal
                Information&quot;).
              </li>
              <li>
                You hereby agree and authorise Ultra to collect and verify information including, but not limited to,
                data relating to your phone (including, without limitation, your phone&apos;s history) from your mobile
                device, from any SMS sent to you or by you, from any 3rd party applications, and such other information
                as Ultra shall require for purposes of providing you our Services (the &quot;Relevant
                Information&quot;).
              </li>
              <li>
                You hereby consent to Ultra verifying the Personal Information and the Relevant Information and using
                the Personal Information and the Relevant Information to the full legal extent necessary for the
                provision of our Services.
              </li>
              <li>
                You agree to indemnify and to not hold Ultra and its Third-Party Partners liable with respect to any
                claims, losses, liabilities and expenses (including legal fees and expenses) that may arise as a result
                of the disclosure and reliance on such Personal Information.
              </li>
              <li>
                Ultra reserves the right to request for further information from you pertaining to your use of the
                Service at any time. Failure to provide such information within the time required by Ultra may result in
                Ultra declining to accept your application for an Account or access to the Service.
              </li>
              <li>
                You acknowledge and agree that when Ultra or our third-party service providers access and retrieve
                information from such third-party websites, Ultra and our third-party service providers are acting as
                your agent, and not the agent of, or on behalf of the third party.
              </li>
              <li>You consent to indemnify Ultra against any liability resulting from erroneous transfers.</li>
              <li>
                You consent that Ultra can deduct funds from your Account when such funds have been established as
                erroneous or fraudulent in nature.
              </li>
              <li>
                Ultra advises its users not to give their financial details, such as BVN (Bank Verification Numbers),
                OTP (One Time Password) and other sensitive financial information to anyone or third parties. Ultra will
                not be liable if such details are compromised.
              </li>
            </ul>

            <motion.h3 id="liability" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              8. LIABILITY
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                In case of an unauthorised payment or a payment that was incorrectly executed due to an error by us, we
                shall at your request immediately refund the payment amount including all fees deducted therefrom. This
                shall not apply in the following circumstances:
                <ul className="list-circle mt-2 space-y-2 pl-6">
                  <li>
                    Where the unauthorised payment arises from your failure to keep the personalised security features
                    of your Ultra Account safe in accordance with these Terms, you shall remain liable;
                  </li>
                  <li>
                    If you fail to notify us without undue delay of a loss of your password or any other event that
                    could reasonably be expected to have compromised the security of your Ultra Account after you have
                    gained knowledge of such an event, Ultra shall not be liable for losses incurred within such a
                    period of time;
                  </li>
                  <li>
                    Where a transaction was unauthorised and you have compromised the security of your Ultra Account,
                    you are expected to notify us within 24 hours of such transaction, failing which Ultra shall not be
                    liable for losses incurred;
                  </li>
                </ul>
              </li>
            </ul>

            <motion.h3 id="intellectual-property" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              9. INTELLECTUAL PROPERTY
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                You acknowledge that the Service, including the content of this Mobile App, text, graphics, logos, and
                images, as well as all other Ultra&apos;s copyrights, trademarks, logos, and product and service names
                are owned exclusively by Ultra Multipurpose Technology Limited (the &quot;Ultra Intellectual
                Property&quot;) and are protected by Copyright and Trademark Laws and various other Intellectual
                Property Rights and Unfair Competition Laws of the Nigerian, foreign jurisdictions, and international
                conventions.
              </li>
              <li>
                You agree not to display, use, copy, or modify the Ultra Intellectual Property in any manner. You are
                authorized solely to view and retain a copy of the pages of Ultra App for your own personal,
                non-commercial use. You further agree not to: (i) use any robot, spider, scraper or other automated
                device to access the Service; (ii) remove or alter any author, trademark or other proprietary notice or
                legend displayed on Ultra App (or printed pages thereof); or (iii) infringe Ultra&apos;s or any third
                party&apos;s copyright, patent, trademark, trade secret or other intellectual property rights, or rights
                of publicity or privacy.
              </li>
              <li>
                If you provide us with any suggestions, feedback, reviews or input (&quot;User Submissions&quot;)
                related to our Services, we (and our corporate group entities) will own all rights, titles and interests
                in and to the User Submissions, even if you have designated the User Submission as confidential. We and
                our corporate group entities will be entitled to use the User Submission without restriction, including
                for marketing or business purposes. You assign to us all right, title and interest in and to the User
                Submission and agree to provide us with any assistance we may require to document, perfect and maintain
                our rights in the User Submission. For this purpose the word: &quot;assign&quot; is a legal term which
                means legally transferring the benefit, such as you legally transferring the benefit of the User
                Submission to us.
              </li>
            </ul>

            <motion.h3 id="governing-law" className="mb-3 mt-8 text-2xl font-semibold" variants={fadeInUp}>
              10. GOVERNING LAW
            </motion.h3>
            <ul className="smaller-text mb-4 list-disc space-y-2 pl-6">
              <li>
                This Agreement shall be governed by and construed in accordance with the Laws of the Federal Republic of
                Nigeria. Any controversy, dispute, or claim arising out of or relating to the Service or Agreement (a
                &quot;Claim&quot;) shall be governed by and construed in accordance with Laws of the Federal Republic of
                Nigeria.
              </li>
              <li>
                The Parties shall in good faith make efforts to resolve any dispute, controversy or claim of any nature
                whatsoever arising out of or in relation to or in connection with these Terms and Conditions.
              </li>
              <li>
                In the event that parties are unable to resolve dispute amicably, either of the Parties may the Lagos
                Court of Arbitration and demand Arbitration following the Guidelines of the Court of Arbitration and the
                Arbitration and Mediation Act, 2023.
              </li>
              <li>The seat of arbitration shall be Lagos, Nigeria.</li>
              <li>The language to be used in the arbitral proceeding shall be the English Language.</li>
              <li>
                Judgement on the Award may be entered in any court with competent jurisdiction and shall be binding on
                the Parties.
              </li>
              <li>The cost of Arbitration shall be covered individually by each of the Parties.</li>
              <li>
                Nothing in the Agreement and within this Dispute Resolution Clause shall preclude any of the Parties
                from seeking interim reliefs from any Court with competent jurisdiction within Nigeria.
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
                { href: "#definitions", text: "1. Definitions" },
                { href: "#eligibility", text: "2. Eligibility" },
                { href: "#registration", text: "3. Registration" },
                { href: "#payment-fees", text: "4. Payment & Fees" },
                { href: "#license-restrictions", text: "5. License & Restrictions" },
                { href: "#unauthorized-transactions", text: "6. Unauthorized Transactions" },
                { href: "#personal-information", text: "7. Personal Information" },
                { href: "#liability", text: "8. Liability" },
                { href: "#intellectual-property", text: "9. Intellectual Property" },
                { href: "#governing-law", text: "10. Governing Law" },
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

export default TermsSection
