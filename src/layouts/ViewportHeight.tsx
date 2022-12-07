import React, { PropsWithChildren } from 'react'
import { Box, SxPropsWithTheme } from '@/lib/material-ui'

type PropsViewportHeight = PropsWithChildren<{
  sx?: SxPropsWithTheme
  maxWidth?: string | number
}>

export const ViewportHeight: React.FC<PropsViewportHeight> = ({
  sx,
  maxWidth = 'lx',
  children
}) => {
  return (
    <Box
      maxWidth={maxWidth}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}