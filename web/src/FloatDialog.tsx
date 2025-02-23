import Popover from "@material-ui/core/Popover"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import styled from "styled-components"
import { ReactComponent as CloseSvg } from "./assets/svg/close.svg"
import { Color, Font, FontSize } from "./style-helpers"

type props = {
  id?: string
  title: string | React.ReactElement
  open: boolean
  anchorEl: Element | null
  onClose: () => void
  children: any
  style?: any
  anchorOrigin?: any
  transformOrigin?: any
}

let TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

let Title = styled.div`
  font-family: ${Font.monospace};
  font-size: ${FontSize.default};
  line-height: 17px;
`

export let HR = styled.hr`
  border-top: 1px dashed ${Color.grayLight};
  margin: 16px -20px 24px -20px;
  color: white;
`

let CloseButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  background-color: white;
  transition: background-color 300ms ease;
  border-radius: 32px 32px;
  padding: 0;

  svg {
    fill: ${Color.grayDark};
  }

  &:hover,
  &:active {
    background-color: ${Color.grayLightest};
  }
`

let Content = styled.div`
  font: ${Font.monospace};
  font-size: ${FontSize.small};
  line-height: 28px;
`

let useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: Color.grayDarkest,
    boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    padding: "16px 20px",
    width: "400px",
  },
}))

// A generic dialog that floats in a part of the screen.
// Intended to be attached to a menu button.
export default function FloatDialog(props: props) {
  const popoverClasses = useStyles()

  let title = props.title
  let titleEl = typeof title == "string" ? <Title>{title}</Title> : title
  let anchorOrigin = props.anchorOrigin ?? {
    vertical: "bottom",
    horizontal: "right",
  }
  let transformOrigin = props.transformOrigin ?? {
    vertical: "top",
    horizontal: "right",
  }
  return (
    <Popover
      id={props.id}
      classes={popoverClasses}
      open={props.open}
      onClose={props.onClose}
      anchorEl={props.anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      disableScrollLock={true}
    >
      <TitleBar>
        {titleEl}
        <CloseButton onClick={props.onClose}>
          <CloseSvg />
        </CloseButton>
      </TitleBar>

      <Content>{props.children}</Content>
    </Popover>
  )
}
