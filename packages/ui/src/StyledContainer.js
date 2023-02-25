import styled from "styled-components";
import variant from "@styled-system/variant";

export const StyledContainer = styled("div")(
  {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: "1rem 0",
  },
  variant({
    variants: {
      MainContent: {
        minHeight: "100vh",
        gridTemplateRows: "auto 1fr auto",
      },
      ProjectContainer: {
        backgroundColor: "light-blue",
        display: "block",
      },
      ProjectHeader: {
        display: "block",
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        marginTop: "-80px",
        marginBottom: "50px",
        zIndex: "999",
      },
      CardContainer: {
        overflow: "hidden",
        padding: "0 0 32px",
        margin: "48px auto 0",
        width: "75%",
        boxShadow:
          "0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08)",
        borderRadius: "5px",
      },
      NavWrapper: {
        position: "sticky",
        bottom: "0",
        display: "block",
        width: "100%",
        fontSize: "18px",
        backgroundColor: "#e5e5e5",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      },
      CardBody: {
        display: "block",
        paddingLeft: "32px",
        paddingRight: "32px",
        justifyContent: "start",
      },
      CardHeader: {
        paddingTop: "32px",
        paddingBottom: "10px",
      },
      FlexWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        display: "flex",
        padding: "0 10px",
      },
    },
  })
);
