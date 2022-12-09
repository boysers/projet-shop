import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Container, Typography, Box } from '@/lib/material-ui'
import { ThemeSwitcher, ShoppingCartButton } from './Inputs'
import styled from 'styled-components'

const StyledLinkWrapper = styled.div`
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`

export const Header: React.FC = () => {
  const handleClickScroll = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' }
            }}
          >
            <Typography
              component={Link}
              to="/"
              variant="h5"
              noWrap
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                letterSpacing: '0.25rem'
              }}
            >
              Foodeliveries
            </Typography>
          </Box>
          <Box component={StyledLinkWrapper}>
            <Typography
              component={Link}
              to="/"
              sx={{ display: { xs: 'none', md: 'inline' } }}
              onClick={handleClickScroll}
            >
              Home
            </Typography>
            <Typography
              to="products"
              component={Link}
              sx={{ margin: { xs: '10px', md: '50px' } }}
              onClick={handleClickScroll}
            >
              Produits
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeSwitcher />
            <ShoppingCartButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
