import { styled, Grid2, Container, Typography, Box } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "../../../assets/images/avatar.jfif"
import { StyledButton } from "../StyledButton/StyledButton.component";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground.component";

export const Hero = () => {

    const StyledHero = styled("section")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }
    }))
    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 7 }}>
                            <Typography textAlign="center" color="primary.contrastText" variant="h1" pb={2}>
                                Carlos Vinícius
                            </Typography>
                            <Typography textAlign="center" color="primary.contrastText" variant="h2">
                                Sou um engenheiro de software
                            </Typography>
                            <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("download")}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("download")}>
                                        <EmailIcon />
                                        <Typography>Entre em contato</Typography>
                                    </StyledButton>
                                </Grid2>
                            </Grid2>


                        </Grid2>
                    </Grid2>
                </Container>
            </StyledHero>
        </>
    )
}