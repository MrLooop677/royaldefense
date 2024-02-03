//
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import logo from "../../../public/images/logo.jpeg";
// Shared
// Styles
import {
  FooterColumnTitle,
  FooterSection,
  FooterText,
  FooterTextLink,
} from "./footer.styles";

// TODO:
// Make it Responsive

function getContactDetails(contactList) {
  return contactList.map((row, index) => {
    const key = `footer-contact-${index}`;
    return (
      <Stack key={key} gap={1} direction="row">
        {row.icon}
        <FooterText
          sx={{ color: "#fff", fontWeight: 500 }}
          component={Link}
          href={row.href}
        >
          {row.text}
        </FooterText>
      </Stack>
    );
  });
}

function getPagesDetails(pages) {
  return pages.map((page) => {
    return (
      <Grid item key={`footer-link-${page.name}`} md={6} xs={12}>
        <FooterTextLink to={page.link}>{page.name}</FooterTextLink>
      </Grid>
    );
  });
}

function getSocialLinks(socialLinks) {
  return socialLinks.map((link, index) => {
    const key = `social-icon-${index}`;
    return (
      <IconButton component={Link} href={link.href} key={key} target="_blank">
        <Box component="img" src={link.src} />
      </IconButton>
    );
  });
}

function FooterComp() {
  //   const { FOOTER } = SECTIONS_CONTENT;
  const FOOTER = {
    subtitle: `Providing Bespoke Asset Management Solutions to Accredited
              Investors & Families`,
    bottomText: "SALEM VENTURES | 2022 | All Rights Reserved",
    socialLinks: [
      {
        //   href: "https://www.facebook.com/SalemVenturesLLP",
        src: "",
      },
      {
        //   href: "https://twitter.com/salem_ventures_",
        src: "",
      },
      {
        //   href: "https://www.linkedin.com/company/salem-ventures/",
        src: "",
      },
      // {
      //   href: "https://www.youtube.com/channel/UCizEJiy_F1URrfum7yheCaQ",
      //   src: ""     // },
      {
        //   href: "https://www.instagram.com/salemventures/",
        src: "",
      },
    ],
    PRIVACY_POLICY: {
      copyRight: "ROYAL DEFENSE  |  2024  |  All Rights Reserved",
      privacy: "Privacy Policy | ",
      terms: "Terms & Conditions",
    },
    pagesCol: {
      title: "Links",
      links: [
        { name: "Home" },
        { name: "Agri-business" },
        { name: "About Us" },
        { name: "Real estate" },
        { name: "Careers" },
        { name: "Ventures" },
        { name: "Blog" },
        { name: "Money Markets" },
        { name: "Money Markets" },
        { name: "Money Markets" },
        { name: "Money Markets" },
        { name: "Money Markets" },
        { name: "Money Markets" },
        { name: "Money Markets" },
      ],
    },
    contactCol: {
      title: "Contact",
      details: [
        {
          // icon: <EmailIcon />,
          href: "mailto:info@test.com",
          text: "info@test.com",
        },
        {
          // icon: <PhoneInTalkIcon />,
          href: "tel:+201200116677",
          text: "+20 (120) 011 66 77",
        },
        {
          // icon: <FmdGoodIcon />,
          text: "Villa 289, El-Narges 2,\nNew Cairo, Egypt",
        },
      ],
    },
  };

  return (
    <FooterSection component="footer">
      <Container>
        <Grid container rowGap={4} columnSpacing={2}>
          <Grid
            item
            md={5}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box component="img" sx={{ maxWidth: "12.5rem" }} src={logo.src} />
            <Typography
              sx={{ fontFamily: "inter", textAlign: "left", maxWidth: 300 }}
            >
              {FOOTER.subtitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 4,
              }}
            >
              {getSocialLinks(FOOTER.socialLinks)}
            </Box>
          </Grid>
          <Grid item md={4} sx={{ textAlign: "left" }}>
            <FooterColumnTitle>{FOOTER.pagesCol.title}</FooterColumnTitle>
            <Grid container sx={{ rowGap: 2, paddingTop: 4 }}>
              {getPagesDetails(FOOTER.pagesCol.links)}
            </Grid>
          </Grid>
          <Grid item md={3} sx={{ textAlign: "left" }}>
            <FooterColumnTitle>{FOOTER.contactCol.title}</FooterColumnTitle>
            <Stack sx={{ gap: 2 }}>
              {/* {getContactDetails(FOOTER.contactCol.details)} */}
              <form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    margin: "auto",
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    sx={{ backgroundColor: "white" }}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    sx={{ backgroundColor: "white" }}
                    type="email"
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    sx={{ backgroundColor: "white" }}
                    type="tel"
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    sx={{ backgroundColor: "white" }}
                    required
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ backgroundColor: "#606060" }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <Box
          sx={{ paddingTop: 4, borderTop: "0.5px solid #585858", mt: 2 }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <FooterText>{FOOTER.PRIVACY_POLICY.copyRight}</FooterText>
          <Box>
            <FooterTextLink sx={{ fontWeight: 400 }} to="/privacy-policy/#">
              {FOOTER.PRIVACY_POLICY.privacy}
            </FooterTextLink>
            <FooterTextLink sx={{ fontWeight: 400 }} to="/terms-conditions/#">
              {FOOTER.PRIVACY_POLICY.terms}
            </FooterTextLink>
          </Box>
        </Box>
      </Container>
    </FooterSection>
  );
}

export default FooterComp;
