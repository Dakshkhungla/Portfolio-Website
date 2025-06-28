import React from 'react';
import styled from 'styled-components';
import { certifications } from '../../data/constants'; // Replace with your certifications array

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 40px auto;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
`;

const CertificationBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${({ color }) => color};
    border-radius: 12px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
`;

const CertificationTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #333333; /* Dark text for contrast */
`;

const CertificationDetails = styled.div`
    font-size: 16px;
    color: #555555;
`;

const VerifyLink = styled.a`
    font-size: 16px;
    color: #007BFF; /* Blue for links */
    text-decoration: none;
    font-weight: 600;
    margin-top: 8px;

    &:hover {
        text-decoration: underline;
    }
`;

const colorPalette = [
  '#f0f4f8', // Soft light gray-blue
  '#e8f0fe', // Very light blue
  '#fffbea', // Soft cream yellow
  '#e6fffa', // Soft mint green
];








const Certifications = () => {
    return (
        <Container id="certifications">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc>
                    Explore my certifications that showcase my skills and expertise in various domains.
                </Desc>
                <Grid>
                    {certifications.map((certification, index) => (
                        <CertificationBox key={index} color={colorPalette[index % colorPalette.length]}>
                            <CertificationTitle>{certification.name}</CertificationTitle>
                            <CertificationDetails>Issued Date: {certification.issuedDate}</CertificationDetails>
                            <VerifyLink href={certification.verifyLink} target="_blank" rel="noopener noreferrer">
                                Verify Credentials
                            </VerifyLink>
                        </CertificationBox>
                    ))}
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default Certifications;
