import React from 'react'

// import assets 
import { Box, Grid, Typography } from '@mui/material'
import styles from "./style.module.css"
import inner1 from "../../assets/images/how-we-help-inner-1.png"
import inner2 from "../../assets/images/how-we-help-inner-2.png"
import inner3 from "../../assets/images/how-we-help-inner-3.png"
import inner4 from "../../assets/images/how-we-help-inner-4.png"


const HowCanHelpComponent = () => {
  return (
    <Box component="section" className={styles.howCanHelpSection}>
      <Grid container className='container'>
        <Grid item lg={10} md={10} xs={12} px={4} pb={4} sx={{margin : "0 auto"}} align="center" className={styles.innerHead} data-aos="fade-up" data-aos-duration='1300'>
          <Typography variant="h1">
            HOW YOU CAN HELP
          </Typography>
          <Typography variant="subtitle2">
            On an individual basis, you can participate in actions that fall under in one or more of these categories: Prevention, Recovery, Rehab and Education. At the least, influence two people to help “Mother Nature” by being a better steward and have each one of them influence two more with this message.
          </Typography>
          <Typography variant="subtitle2">
            Alternatively, if you cannot participate in taking action yourself then help fund an organization that is doing so in your category of choice.
          </Typography>
        </Grid>


        <Grid container >
          <Grid item lg={3} md={6} xs={12} px={2} align="center">
            <Box component="div" className={styles.innerDivMain}>
              <Box component="div" className={styles.flip_Box_Front}>
                <img src={inner1} alt="PREVENTION" />
                <Typography variant="h5">
                  PREVENTION
                </Typography>
                <Typography variant="subtitle2">
                  Global warming and climate change are and have been hot topics for many years. A variety of pacts,
                  treaties and policies have been enacted to reduce greenhouse gases and carbon emissions. On an individual level,
                  drastically reduce or eliminate actions that can increase global warming. Also actions that can increase pollution on
                  land or water, damage an eco-system and stop you from being a good steward. Prevention is a good first step but by
                  itself not enough to reverse the damage to our air, land and water attributable to the lack of stewardship. In addition
                  to prevention of further damage, we must take other strong measures that will help Mother Nature
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={3} md={6} xs={12} px={2} align="center">
            <Box component="div" className={styles.innerDivMain}>
              <Box component="div" className={styles.flip_Box_Front}>
                  <img src={inner2} alt="RECOVERY" />
                  <Typography variant="h5">
                    RECOVERY
                  </Typography>
                  <Typography variant="subtitle2">
                    Lack of stewardship enabled ill-intentioned individuals and entities to wantonly abuse “Mother
                    Nature” by spewing and/or dumping toxic and non-toxic substances into air, land and water without being held
                    accountable for their actions. It is estimated that by mid-century, tiny pieces of plastic each weighing less than 1
                    gram that have been dumped in the oceans will outweigh all the marine life in the oceans. In many countries, it is
                    common practice to dump raw sewage, agriculture fertilizer chemical runoff and industrial waste in to lakes, rivers
                    and the ocean. We have to help “Mother Nature” on an individual as well as global basis to recover from abuse of
                    this nature by removing man-made toxic and non-toxic substances from air, land and water. 
                  </Typography>
                  {/* <Button variant="text"> Read More </Button> */}
              </Box>
            </Box>
          </Grid>

          <Grid item lg={3} md={6} xs={12} px={2} align="center">
            <Box component="div" className={styles.innerDivMain}>
              <Box component="div" className={styles.flip_Box_Front}>
                  <img src={inner3} alt="REHAB" />
                  <Typography variant="h5">
                    REHAB
                  </Typography>
                  <Typography variant="subtitle2">
                    Clear cutting forests, denuding trees, obstructing flow of a stream or river, eliminating a marsh by filling it
                    are all actions that disrupt and damage eco-systems. We must rehabilitate air, land and water where ecosystems have
                    been damaged due to activities such as strip mining, clear cutting of forests, filling a marsh, slough or wetlands. We
                    must help “Mother Nature” is by “Rehabilitating” damage caused by man’s actions on land and water through
                    activities such as replacement of strip mining with alternate responsible mining. Replanting trees to begin making up
                    for loss of forests. Where feasible, restoring natural flow to rivers and streams that have been obstructed and/or
                    diverted. Reclaiming and restoring land lost to coastal flooding caused by rising sea levels or made unsuitable for
                    irrigation or plant life due to toxic runoffs. 
                  </Typography>
                  {/* <Button variant="text"> Read More </Button> */}
              </Box>
            </Box>
          </Grid>


          <Grid item lg={3} md={6} xs={12} px={2} align="center">
            <Box component="div" className={styles.innerDivMain}>
              <Box component="div" className={styles.flip_Box_Front}>
                  <img src={inner4} alt="EDUCATION" />
                  <Typography variant="h5">
                    EDUCATION
                  </Typography>
                  <Typography variant="subtitle2">
                    Learn about the damage caused by our lack of stewardship in upsetting the environmental balance
                    thus triggering climate change and global warming. After learning, educate others and help them become better
                    stewards. Help mitigate misconceptions about being a better steward. Making others better stewards is another
                    manner of helping “Mother Nature” not only because with each person’s help it could result in cleaner air, land and
                    water for future generations but also because survival of human beings depends on a habitable Earth. 
                  </Typography>
                  {/* <Button variant="text"> Read More </Button> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>

  )
}

export default HowCanHelpComponent