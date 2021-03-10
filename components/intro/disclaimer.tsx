import React from "react";

interface Props {}

const Disclaimer: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <>
      <div className="disclaimer">
        <p>
          Despite careful checks of content linked to websites other than this, Kuratorium cannot be
          considered liable for the content of other websites, although they might be accessed
          through links from this website. The owners of the respective websites are liable for
          their contents. Contents of this website are subject to the German copyright law. Copies
          and / or downloads of this website are only permitted to be used privately, unless
          indicated otherwise. For any kind of use other than this, a permission in written form is
          needed. Should you discover any kind of potential copyright infringement on this website,
          please contact the email address above and we will remove the respective content
          immediately.
        </p>
        <br />
        <p>Privacy Policy: </p>
        <p>
          Kuratorium | Schleifen Musikverlag, L. Wiehe, Saarbrücker Str. 14, 10405 Berlin
          (hereinafter “we”, “us” and “our”) runs this website and therefore processes personal data
          pursuant to the EU General Data Protection Regulation (“GDPR”). You may reach out to us
          via e-mail: hallo[at]kuratorium.net. Where we use the term "data", we are referring to
          personal data within the meaning of the GDPR.
        </p>
        <p>
          1. Website Visitors Our web server processes a series of data for each request, which your
          browser automatically transmits to our web server. This data comprises the IP address
          currently assigned to your device, the date and time of the request, the time zone, the
          specific page or file called up, the http status code and the amount of data transferred.
          Additionally, the website from which your request came, the browser used, the operating
          system of your end device and the set language. The web server uses this data to display
          the contents of this website in the best possible way on your device. We do not use any
          kind of cookies or analytical tools.
        </p>
        <br />
        <p>
          2. Newsletter Recipients When you subscribe to our newsletter, we process your data
          provided by you during the subscription process with the purpose of sending you the
          requested newsletter. We send out the newsletters ourselves and therefore do not transmit
          respective information to a third party for this purpose. The legal basis for data
          processing with respect to newsletters is your consent pursuant to Art. 6 (1) lit. a)
          GDPR. Your data provided during the subscription to our newsletter will be deleted when
          you unsubscribe from the newsletter. You may unsubscribe at any time by clicking on the
          respective “unsubscribe”-link provided with any newsletter. Data submission is necessary
          for the receipt of our newsletters. If you do not submit any data, it is not possible for
          us to send you the requested newsletter.
        </p>
        <br />
        <p>
          3. Communication and Contractual Obligations When you reach out to us via email or
          otherwise, we process the data you provide us with for the purpose of performing our
          obligations with regard to our contractual relationship or its preparation and/or any
          other communication purposes. This also includes consulting and information requests. In
          this event, the legal basis for processing your data is Art. 6 (1) lit. b) GDPR based on a
          contractual relationship or the initiation of a contractual relationship and/or Article 6
          (1) lit. c) GDPR where we are legally obliged to do so, in particular pursuant to
          applicable tax and commercial law provisions. In any case, the legal basis for processing
          your contact data is Article 6 (1) lit. f) GDPR, our legitimate interest is to enter into
          the communication with you. All data relevant to contracts and book keeping shall be
          stored for a period of ten (10) calendar years after the end of our contractual
          relationship pursuant to obligations based on tax and commercial law provisions. The
          provision of your contact data is obligatory where you want us to enter into a
          communication with you. Contractual relationships cannot be established and carried out
          without the basic contractual data.
        </p>
        <br />
        <p>
          4. Rights of Data Subjects We do not use any methods of automated individual
          decision-making. At any time, you have the right to request information about all your
          Data which we are processing. Furthermore, if your Data is incorrect or incomplete, you
          have the right to have it rectified and completed. You can also request the erasure of
          your Data at any time, unless we are legally obliged to continue processing your Data.
          Where applicable legal requirements are met, you can request a restriction to the
          processing of your Data. You also have the right to object to the processing, insofar as
          the data processing is based on profiling or direct marketing purposes. Where we process
          your Data on the basis of your consent or a contract, you have the right to transfer the
          Data provided by you, insofar as the rights and freedoms of others remain unaffected.
          Where we process your Data on the basis of a declaration of consent, you have the right to
          revoke such consent at any time with future effect. The processing carried out prior to a
          revocation remains unaffected by the revocation. Where you believe that we process your
          Data in violation of the applicable law, you have the right to file a complaint with a
          data protection supervisory authority at any time.
        </p>
        <br />
        <p>:::</p>
      </div>
    </>
  );
};
export default Disclaimer;
