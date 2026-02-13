import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const PROJECTS_PER_PAGE = 3;

const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
`;

const PageButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme, active }) => active ? theme.primary : theme.primary + '50'};
    background: ${({ theme, active }) => active ? theme.primary : 'transparent'};
    color: ${({ theme, active }) => active ? theme.white : theme.text_secondary};
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: ${({ theme, active }) => active ? theme.primary : theme.primary + '20'};
        border-color: ${({ theme }) => theme.primary};
    }
`;

const NavButton = styled.button`
    padding: 8px 18px;
    border-radius: 20px;
    border: 1.5px solid ${({ theme }) => theme.primary + '50'};
    background: transparent;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.primary + '20'};
        border-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.primary};
    }
    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = toggle === 'all'
    ? projects
    : projects.filter((item) => item.category === toggle);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to deployment. Here are some of my projects.
        </Desc>

        <CardContainer>
          {currentProjects.map((project, index) => (
            <ProjectCard key={`project-${startIndex + index}`} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>

        {totalPages > 1 && (
          <PaginationContainer>
            <NavButton
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ← Prev
            </NavButton>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PageButton
                key={page}
                active={currentPage === page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageButton>
            ))}
            <NavButton
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next →
            </NavButton>
          </PaginationContainer>
        )}
      </Wrapper>
    </Container>
  )
}

export default Projects