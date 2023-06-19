import React from "react";
import { Box, Grid } from "@mui/material";
import { PageText } from "../../components";

export const StoryView: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box display="flex" flexDirection="row" alignItems="center" pb={10}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Box p={2} pt={6} width="100%">
              <Grid container direction="row" spacing={3}>
                <Grid item xs={4}>
                  <Box>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        borderRadius: "10px",
                        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, .3))",
                      }}
                      src="Computer.jpeg"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        borderRadius: "10px",
                        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, .3))",
                      }}
                      src="Holland.jpeg"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <img
                      width="100%"
                      height="100%"
                      style={{
                        borderRadius: "10px",
                        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, .3))",
                      }}
                      src="Cuba.jpg"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pb={10} p={2}>
              <PageText variant="h3">About Me</PageText>
              <PageText>
                <br />
                {`I was born and spent my entire childhood in Hull, MA, about an hour south of Boston. I never quite knew exactly what I wanted to be as a kid, but I absolutely loved building things. There's something incredible about seeing individual parts come together to create something far greater than their sum. I loved building Legos (particularly Star Wars) and creating all kinds of crazy structures in Minecraft on my Xbox.`}
                <br />
                <br />
                {`In 7th grade, I changed schools and switched to Boston College High School. Here, I began to further expand my love of building and technology. I joined Video Games Club, and here I saw my first coding: basic Lua games in an app called Codea. I didn't quite understand how it worked at the time, but I understood the power that code could hold in creation. At the same time, my friends talked about how they built their own computers with custom parts, a concept that absolutely fascinated me, and so I researched more and more into the subject.`}
                <br />
                <br />
                {`In high school, I finally took action on what I had been learning over the past few years. First, I did a summer iD Discovery camp, where I actually created my first code in Java. Secondly, I finally decided to build my own desktop from scratch. Over the course of 9 months, I researched each of the parts I wanted to buy, and once I had collected them, I spent several days during the summer tinkering with the system and modifying it so that it truly felt like my own creation (shown in the first picture above). Finally, I took my first actual academic coding class, as I took an introduction to Python during my senior year. Here, I learned both the fundamentals to programming as well as a love for it. `}
                <br />
                <br />
                {`I graduated from BC High in 2019, and I decided to go to my dream school, the University of Michigan, to study Computer Science. Here, I've only furthered my love of building. I've grown tremendously in my skills through my instruction here, not only in effectively coding, but also in planning and trial and error. Nonetheless, in my junior year, I decided that I was also interested in combining my programming knowledge with other fields such as my interest in linguistics and philosophy. I switched my major to Cognitive Science on the track of Computation, where I've been able to explore more broadly how technology can be applied to many different fields.`}
                <br />
                <br />
                {`I've also worked to build a movement as a student leader in Cru, a Christian organization on campus that I've been a part of my entire time at Michigan. My spiritual life has always guided me, and I've been able to put this into action as I've been able to lead small groups in maturing and growing in our faith. I've also had the chance to go on multiple mission trips, as is shown in the last photo above (taken in Cuba!).`}
                <br />
                <br />
                {`In April of 2023, I graduated from Michigan with a Bachelor's in Cognitive Science and minors in Computer Science and History. I'm now looking for my first opportunity to demonstrate what I've learned while continuing to grow further in my technical skills and abilities. My story has always been one of building, and I can't wait to to see what possibilities the next stage will bring!`}
                <br />
              </PageText>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StoryView;
