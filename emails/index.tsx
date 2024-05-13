import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TwitchResetPasswordEmailProps {
  username?: string;
  senderEmail: string;
  appointmentDate: Date;
}

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const TwitchResetPasswordEmail = ({
  username,
  senderEmail,
  appointmentDate,
}: TwitchResetPasswordEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(appointmentDate);

  return (
    <Html>
      <Head />
      <Preview>Your appointment is getting closer</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              width={114}
              src="https://i.ibb.co/7JrC67x/Blue-white-and-green-Medical-care-logo.png"
            />
          </Section>

          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>Dear {username},</Text>

            <Text style={paragraph}>
              This is a friendly reminder from MaliMed about your upcoming
              medical appointment scheduled for {formattedDate}. Please plan to
              arrive at least 15 minutes early to complete any necessary
              paperwork.
            </Text>

            <Text style={paragraph}>
              If you need to reschedule or have any questions, please contact us
              at {senderEmail}. If you want to cancel your appointment you can
              do it{" "}
              <Link href={baseUrl} style={link}>
                on malimed
              </Link>{" "}
              immediately.
            </Text>

            <Text style={paragraph}>
              We look forward to seeing you and assisting with your healthcare
              needs.
            </Text>

            <Text style={paragraph}>
              Best regards,
              <br />
              MaliMed Support Team
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              <Img src={`${baseUrl}/static/twitch-icon-twitter.png`} />
            </Column>
            <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              <Img src={`${baseUrl}/static/twitch-icon-facebook.png`} />
            </Column>
          </Row>

          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2022 MaliMed, All Rights Reserved <br />
              350 Bush Street, 2nd Floor, San Francisco, CA, 94104 - USA
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

TwitchResetPasswordEmail.PreviewProps = {
  username: "alanturing",
  senderEmail: "malimed.support@gmail.com",
  appointmentDate: new Date("June 23, 2022 4:06:00 pm UTC"),
} as TwitchResetPasswordEmailProps;

export default TwitchResetPasswordEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
