import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck, Mail, MapPin, Calendar, FileText } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy — Chukolab",
  description:
    "Privacy Policy for Chukolab Ltd. Understand how we collect, use, store, and safeguard your information across our website, scheduling utilities, and software engagements.",
};

const tableOfContents = [
  { id: "overview", label: "01. Overview & Scope" },
  { id: "information-we-collect", label: "02. Information We Collect" },
  { id: "how-we-use-information", label: "03. How We Use Information" },
  { id: "sharing-and-disclosure", label: "04. Sharing & Disclosure" },
  { id: "cookies-and-analytics", label: "05. Cookies & Technical Logs" },
  { id: "third-party-services", label: "06. Third-Party Services" },
  { id: "security-and-storage", label: "07. Data Security & Storage" },
  { id: "data-retention", label: "08. Retention of Information" },
  { id: "your-rights", label: "09. Your Rights & Requests (NDPA 2023)" },
  { id: "childrens-privacy", label: "10. Children's Privacy" },
  { id: "policy-updates", label: "11. Policy Updates" },
  { id: "contact-information", label: "12. Contact Information" },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 11, 2026";

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-[#111111] selection:bg-[#435BFF] selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-24">
        <Container size="wide">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8 sm:mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#5F6368] hover:text-[#435BFF] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#435BFF] transition-transform group-hover:-translate-x-1" />
              <span>Back to Chukolab</span>
            </Link>
          </div>

          {/* Hero Section */}
          <header className="max-w-4xl pb-10 sm:pb-14 border-b border-[#E8E8EA]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#435BFF] font-medium mb-4">
              <span>{"// LEGAL & COMPLIANCE"}</span>
              <span className="text-[#80868B]">/</span>
              <span>DATA PROTECTION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] leading-[1.08] uppercase">
              Privacy Policy
            </h1>

            <p className="mt-6 text-base sm:text-xl text-[#5F6368] font-normal leading-relaxed max-w-3xl">
              This Privacy Policy explains how Chukolab Ltd. (&ldquo;Chukolab&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, protects, and discloses personal information obtained through our website, scheduling utilities, project consultation channels, and professional engagements.
            </p>

            {/* Studio Metadata Strip */}
            <div className="mt-8 pt-8 border-t border-[#E8E8EA] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <span className="text-[#80868B] block mb-1">LAST UPDATED</span>
                <span className="text-[#111111] font-medium">{lastUpdated}</span>
              </div>
              <div>
                <span className="text-[#80868B] block mb-1">OPERATING ENTITY</span>
                <span className="text-[#111111] font-medium">Chukolab Ltd.</span>
              </div>
              <div>
                <span className="text-[#80868B] block mb-1">JURISDICTION</span>
                <span className="text-[#111111] font-medium">Nigeria (NDPA 2023)</span>
              </div>
              <div>
                <span className="text-[#80868B] block mb-1">PRIVACY DESK</span>
                <a
                  href="mailto:hello@chukolab.com"
                  className="text-[#435BFF] hover:underline block truncate"
                >
                  hello@chukolab.com
                </a>
              </div>
            </div>
          </header>

          {/* Two-Column Layout: Sticky Navigation + Content */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sidebar Table of Contents (Desktop) */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
              <div className="border border-[#E8E8EA] bg-[#F9FAFB] p-6 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E8E8EA] text-xs font-mono uppercase tracking-wider text-[#111111] font-medium">
                  <FileText className="w-3.5 h-3.5 text-[#435BFF]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1 font-mono text-xs">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1.5 text-[#5F6368] hover:text-[#435BFF] transition-colors leading-relaxed"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="pt-4 border-t border-[#E8E8EA] text-[11px] font-mono text-[#80868B] leading-relaxed">
                  Questions regarding this document? Email{" "}
                  <a href="mailto:hello@chukolab.com" className="text-[#435BFF] underline">
                    hello@chukolab.com
                  </a>
                  .
                </div>
              </div>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-8 space-y-16 sm:space-y-20 max-w-3xl">
              {/* 01. OVERVIEW & SCOPE */}
              <section id="overview" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 01"}</span>
                  <span>SCOPE &amp; OVERVIEW</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  1. Overview &amp; Scope
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    Chukolab Ltd. is an independent software product studio based in Enugu, Nigeria. We architect, design, and engineer custom digital platforms, financial technology infrastructure, operational consoles, and enterprise software systems.
                  </p>
                  <p>
                    This Privacy Policy applies to personal information gathered through our public website (<a href="https://chukolab.vercel.app/" className="text-[#435BFF] underline">https://chukolab.vercel.app/</a> and related studio properties), our project enquiry forms, our scheduling tools, and our direct commercial communications.
                  </p>
                  <p>
                    We prioritize transparency, operational discipline, and data minimization. We only collect information that is genuinely necessary to evaluate, establish, and fulfill technical engagements with prospective and existing clients.
                  </p>
                </div>
              </section>

              {/* 02. INFORMATION WE COLLECT */}
              <section id="information-we-collect" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 02"}</span>
                  <span>DATA COLLECTION</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  2. Information We Collect
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-4 font-normal">
                  <p>
                    We collect personal information that you provide to us voluntarily through direct interactions with our studio:
                  </p>

                  <div className="space-y-3 pl-4 border-l-2 border-[#435BFF]">
                    <div>
                      <span className="font-medium text-[#111111] block">Contact &amp; Identification Details:</span>
                      <span>
                        Your full name, corporate or personal email address, telephone number, and WhatsApp contact number provided when you submit an enquiry, request a proposal, book an introductory call, or contact us directly.
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-[#111111] block">Project &amp; Business Information:</span>
                      <span>
                        Company name, domain, project scope, technical specifications, operational bottlenecks, anticipated timelines, and budget expectations shared during consultations or scoping discussions.
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-[#111111] block">Communication Records:</span>
                      <span>
                        Transcripts, notes, or email correspondences exchanged between you and our studio team members during meetings, discovery calls, and project kickoffs.
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-[#111111] block">Technical Server Data:</span>
                      <span>
                        Standard internet request details (such as IP address, browser type, operating system, referring URL, and date/time stamps) generated automatically when your browser requests pages from our web servers.
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#F9FAFB] border border-[#E8E8EA] p-4 font-mono text-xs text-[#5F6368]">
                    <span className="text-[#111111] font-medium block mb-1">NOTE ON FINANCIAL &amp; SENSITIVE DATA:</span>
                    We do not collect payment card credentials, bank login details, or sensitive personal data (e.g. biometric data, political opinions, or religious beliefs) through our marketing website.
                  </div>
                </div>
              </section>

              {/* 03. HOW WE USE INFORMATION */}
              <section id="how-we-use-information" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 03"}</span>
                  <span>UTILIZATION</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  3. How We Use Information
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    We process personal information solely for legitimate business, commercial, and operational purposes, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                    <li>
                      <strong className="text-[#111111] font-medium">Enquiry Response &amp; Communication:</strong> Responding promptly to your project requests, messages, questions, and consultation enquiries.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Scoping &amp; Commercial Proposals:</strong> Evaluating your software architecture needs, preparing technical proposals, statements of work, and project budgets.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Meeting Coordination:</strong> Scheduling, calendar management, and conducting discovery calls or design workshops through our scheduling tools.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Service Delivery:</strong> Providing custom engineering, software development, platform architecture, and advisory services agreed upon under commercial contracts.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Security &amp; Abuse Prevention:</strong> Protecting our website, servers, infrastructure, and team against cybersecurity threats, malicious traffic, and unauthorized activity.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Legal Compliance:</strong> Satisfying statutory recordkeeping, tax, and accounting requirements under Nigerian law.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 04. SHARING AND DISCLOSURE */}
              <section id="sharing-and-disclosure" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 04"}</span>
                  <span>DISCLOSURE PRACTICES</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  4. How Information Is Shared
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <div className="border border-[#435BFF]/30 bg-[#F2F5FF] p-4 text-sm text-[#111111]">
                    <strong>Our Core Commitment:</strong> Chukolab does not sell, rent, trade, or monetize your personal information or contact details to third parties, data aggregators, or advertising networks under any circumstances.
                  </div>
                  <p>
                    We share personal information strictly on a need-to-know basis under the following limited conditions:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                    <li>
                      <strong className="text-[#111111] font-medium">Operational Service Providers:</strong> Trusted third-party vendors who provide infrastructure, cloud hosting, email delivery, appointment scheduling, and communication software to support our studio operations. These vendors are bound by confidentiality obligations and are prohibited from using your data for their own independent marketing.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Legal &amp; Regulatory Obligations:</strong> Where disclosure is strictly required to comply with an enforceable subpoena, court order, statutory regulation, or directive from a competent authority under the laws of the Federal Republic of Nigeria (such as the Nigeria Data Protection Commission).
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Protection of Rights &amp; Safety:</strong> When necessary to protect the security, legal rights, and physical safety of Chukolab, our clients, staff, or the public against fraud or technical compromise.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 05. COOKIES AND ANALYTICS */}
              <section id="cookies-and-analytics" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 05"}</span>
                  <span>COOKIES &amp; LOGS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  5. Cookies &amp; Technical Web Data
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    We design our digital presence with architectural restraint and respect for user privacy:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                    <li>
                      <strong className="text-[#111111] font-medium">No Advertising or Retargeting Pixels:</strong> We do not deploy third-party advertising cookies, retargeting pixels (such as Meta Pixel), or behavioral profiling trackers on this website.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">No Third-Party Analytics Trackers:</strong> We do not inject commercial tracking platforms or third-party web analytics software into our website code.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Essential Technical Transmission:</strong> Our hosting infrastructure (Vercel) automatically processes baseline HTTP request headers and technical server logs (such as IP address, user agent, requested paths, and request latency) strictly for routing, performance optimization, and cybersecurity defense.
                    </li>
                  </ul>
                  <p>
                    You can manage or disable cookie storage through your browser settings at any time without impacting your ability to browse Chukolab&rsquo;s website.
                  </p>
                </div>
              </section>

              {/* 06. THIRD-PARTY SERVICES */}
              <section id="third-party-services" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 06"}</span>
                  <span>EXTERNAL INTEGRATIONS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  6. Third-Party Services
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    Our website and customer communication touchpoints interface with select third-party services:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                    <li>
                      <strong className="text-[#111111] font-medium">Scheduling Infrastructure:</strong> When you click &ldquo;Schedule a call&rdquo; on our site, you are directed to our dedicated scheduling tool (hosted at <code className="font-mono text-xs bg-[#F9FAFB] px-1.5 py-0.5 border border-[#E8E8EA]">chukolab-scheduler.vercel.app</code>) to choose an appointment slot and provide contact coordinates.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Electronic Mail &amp; Video Conferencing:</strong> Direct email enquiries sent to <code className="font-mono text-xs bg-[#F9FAFB] px-1.5 py-0.5 border border-[#E8E8EA]">hello@chukolab.com</code> and video meetings arranged via tools such as Google Meet or Zoom.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Cloud Hosting:</strong> Our web application is hosted on Vercel&rsquo;s cloud network.
                    </li>
                  </ul>
                  <p>
                    These third-party platforms govern any data they handle under their respective terms and privacy policies. We encourage you to review their policies when engaging with their external interfaces.
                  </p>
                </div>
              </section>

              {/* 07. DATA SECURITY AND STORAGE */}
              <section id="security-and-storage" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 07"}</span>
                  <span>SECURITY MEASURES</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  7. Data Storage &amp; Security
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    We take reasonable, industry-standard administrative, technical, and operational precautions to protect personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, or destruction.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                    <li>
                      <strong className="text-[#111111] font-medium">Transport Encryption:</strong> All web traffic between your device and Chukolab is encrypted using modern Transport Layer Security (TLS/HTTPS).
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Access Controls:</strong> Access to studio email accounts, scheduling databases, and client documentation is restricted to authorized studio personnel on a need-to-know basis using multi-factor authentication.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Engineering Hygiene:</strong> Software infrastructure is built following secure coding standards and minimal exposure principles.
                    </li>
                  </ul>
                  <div className="bg-[#F9FAFB] border border-[#E8E8EA] p-4 text-xs font-mono text-[#5F6368]">
                    <span className="text-[#111111] font-medium block mb-1">REALISTIC SECURITY ACKNOWLEDGEMENT:</span>
                    While we implement rigorous technical precautions, no electronic transmission over the internet or method of digital storage can guarantee absolute, impenetrable security. Any transmission is made at your own risk.
                  </div>
                </div>
              </section>

              {/* 08. DATA RETENTION */}
              <section id="data-retention" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 08"}</span>
                  <span>LIFECYCLE</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  8. Retention of Information
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    We retain personal information only for as long as is reasonably necessary to fulfill the specific purposes outlined in this policy:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                    <li>
                      <strong className="text-[#111111] font-medium">General Enquiries:</strong> Retained for the duration required to evaluate, discuss, and resolve the project consultation or communication.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Active Client Relationships:</strong> Retained for the duration of the software development engagement, warranty phase, and subsequent support arrangements.
                    </li>
                    <li>
                      <strong className="text-[#111111] font-medium">Legal &amp; Financial Obligations:</strong> Invoices, contracts, and commercial records are retained for the statutory duration required under Nigerian tax and corporate law.
                    </li>
                  </ul>
                  <p>
                    When personal information is no longer needed, we securely delete, overwrite, or anonymize the data so it can no longer be associated with an identifiable individual.
                  </p>
                </div>
              </section>

              {/* 09. YOUR RIGHTS (NDPA 2023) */}
              <section id="your-rights" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 09"}</span>
                  <span>DATA SUBJECT RIGHTS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  9. Your Rights &amp; Requests
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    Under the <strong className="text-[#111111]">Nigeria Data Protection Act 2023 (NDPA)</strong> and applicable data protection principles governing our international client relationships, you possess recognized rights regarding your personal information:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="border border-[#E8E8EA] p-4 bg-white">
                      <div className="font-mono text-xs text-[#435BFF] mb-1 font-medium">RIGHT OF ACCESS</div>
                      <p className="text-xs text-[#5F6368]">
                        Request confirmation of whether Chukolab holds your personal data and obtain a copy.
                      </p>
                    </div>
                    <div className="border border-[#E8E8EA] p-4 bg-white">
                      <div className="font-mono text-xs text-[#435BFF] mb-1 font-medium">RIGHT TO RECTIFICATION</div>
                      <p className="text-xs text-[#5F6368]">
                        Request correction or updating of inaccurate, outdated, or incomplete personal data.
                      </p>
                    </div>
                    <div className="border border-[#E8E8EA] p-4 bg-white">
                      <div className="font-mono text-xs text-[#435BFF] mb-1 font-medium">RIGHT TO ERASURE</div>
                      <p className="text-xs text-[#5F6368]">
                        Request the deletion of your personal data where retention is no longer justified by law or contract.
                      </p>
                    </div>
                    <div className="border border-[#E8E8EA] p-4 bg-white">
                      <div className="font-mono text-xs text-[#435BFF] mb-1 font-medium">RIGHT TO OBJECT &amp; RESTRICT</div>
                      <p className="text-xs text-[#5F6368]">
                        Object to processing or request restriction of processing under applicable statutory circumstances.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p>
                      To exercise any of these rights, please email us directly at{" "}
                      <a href="mailto:hello@chukolab.com" className="text-[#435BFF] font-medium underline">
                        hello@chukolab.com
                      </a>{" "}
                      with the subject line &ldquo;Privacy Request &mdash; Data Subject Rights&rdquo;. We will acknowledge and process your verified request in accordance with the timelines established by the Nigeria Data Protection Act 2023.
                    </p>
                  </div>
                </div>
              </section>

              {/* 10. CHILDREN'S PRIVACY */}
              <section id="childrens-privacy" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 10"}</span>
                  <span>MINORS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  10. Children&rsquo;s Privacy
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    Chukolab is a business-to-business product studio. Our website, applications, and professional engineering services are intended strictly for founders, corporate enterprises, and adult professionals.
                  </p>
                  <p>
                    We do not knowingly solicit or collect personal information from individuals under the age of 18. If we learn that we have inadvertently collected personal data from a child without verified parental or guardian consent, we will take immediate measures to delete such records from our systems.
                  </p>
                </div>
              </section>

              {/* 11. POLICY UPDATES */}
              <section id="policy-updates" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 11"}</span>
                  <span>AMENDMENTS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  11. Updates to This Policy
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-3 font-normal">
                  <p>
                    We may update or modify this Privacy Policy periodically to reflect changes in our studio operations, technological infrastructure, service offerings, or relevant regulatory requirements in Nigeria and international jurisdictions.
                  </p>
                  <p>
                    Any revisions will take effect immediately upon being posted on this page. The &ldquo;Last updated&rdquo; timestamp at the top of this document will always indicate when the latest revisions were made. We advise reviewing this page periodically to remain informed of our privacy standards.
                  </p>
                </div>
              </section>

              {/* 12. CONTACT INFORMATION */}
              <section id="contact-information" className="scroll-mt-28 space-y-4 pt-10 border-t border-[#E8E8EA]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#435BFF] uppercase tracking-wider">
                  <span>{"// 12"}</span>
                  <span>STUDIO CONTACT</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                  12. Contact Information &amp; Data Protection Enquiries
                </h2>
                <div className="text-base text-[#5F6368] leading-relaxed space-y-4 font-normal">
                  <p>
                    If you have questions, feedback, or data privacy requests concerning this Privacy Policy or our operational practices, please reach out to us using the verified contact details below:
                  </p>

                  <div className="border border-[#E8E8EA] bg-[#F9FAFB] p-6 space-y-4 font-mono text-xs">
                    <div className="flex items-start gap-3">
                      <div className="p-2 border border-[#E8E8EA] bg-white text-[#435BFF]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#80868B] block">LEGAL ENTITY</span>
                        <span className="text-[#111111] font-medium text-sm">Chukolab Ltd.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 border border-[#E8E8EA] bg-white text-[#435BFF]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#80868B] block">PRIMARY PRIVACY EMAIL</span>
                        <a
                          href="mailto:hello@chukolab.com"
                          className="text-[#435BFF] font-medium text-sm hover:underline"
                        >
                          hello@chukolab.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 border border-[#E8E8EA] bg-white text-[#435BFF]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#80868B] block">STUDIO LOCATION</span>
                        <span className="text-[#111111] font-medium text-sm">Enugu, Nigeria</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 border border-[#E8E8EA] bg-white text-[#435BFF]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#80868B] block">DATA PROTECTION DESK / OFFICER</span>
                        <span className="text-[#111111] font-medium text-sm">
                          [Chukolab Data Protection Desk]
                        </span>
                        <span className="text-[11px] text-[#80868B] block mt-0.5">
                          Owner placeholder &mdash; replace with named DPO if designated under NDPA requirements.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Project CTA Box */}
              <div className="pt-12 border-t border-[#E8E8EA]">
                <div className="border border-[#E8E8EA] bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#435BFF] font-medium">
                      {"// READY TO BUILD?"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                      Have a software project to discuss?
                    </h3>
                    <p className="text-sm text-[#5F6368] max-w-md">
                      Let&rsquo;s talk through your system architecture, transaction flows, and technical roadmap.
                    </p>
                  </div>
                  <a
                    href="mailto:hello@chukolab.com"
                    className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-5 py-3 border border-[#435BFF] bg-[#435BFF] text-white hover:bg-[#364BDB] active:bg-[#2D3FB8] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>START A PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
