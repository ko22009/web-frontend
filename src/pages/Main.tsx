import Grid from "@/components/layout/Grid";
import React from "react";
import Header from "@/components/Header";
import GridItem from "@/components/layout/GridItem";

const Main = (WrappedComponent: any) => {
  class Main extends React.Component<any, any> {
    render() {
      return (
        <Grid
          direction={"vertical"}
          gridTemplateRows="auto 1fr auto"
          style={{
            height: "100%",
          }}
        >
          <GridItem>
            <Header />
          </GridItem>
          <GridItem>
            <WrappedComponent {...this.props} />
          </GridItem>
          <GridItem className="bg-gray">
            <Grid wrapped>
              <footer style={{ textAlign: "center", padding: "20px" }}>
                Ant Design ©2018 Created by Ant UED
              </footer>
            </Grid>
          </GridItem>
        </Grid>
      );
    }
  }
  return Main;
};

export default Main;
