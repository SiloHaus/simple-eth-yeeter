import { useDHConnect } from "@daohaus/connect";
import { TARGETS } from "../targetDao";
import { Badge, DataIndicator, Progress } from "@daohaus/ui";
import { formatValueTo, fromWei } from "@daohaus/utils";
import styled from "styled-components";
import { DataGrid } from "./DataGrid";

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

export const ProgressSection = ({
  yeetBalance,
  max,
}: {
  yeetBalance?: string | null;
  max?: string | null;
}) => {
  let validCaps, softCapReached, hardCapReached, softCapDisp, hardCapDisp;

  if (Number(TARGETS.SOFT_CAP) < Number(TARGETS.MAX_YEET)) {
    validCaps = true;
    softCapReached = Number(yeetBalance) > Number(TARGETS.SOFT_CAP);
    hardCapReached = Number(yeetBalance) > Number(TARGETS.MAX_YEET);
    const softCapPerc =
      (Number(TARGETS.SOFT_CAP) / Number(TARGETS.MAX_YEET)) * 100; // 100% of soft cap
    hardCapDisp =
      Number(yeetBalance) > Number(TARGETS.MAX_YEET)
        ? 100 - softCapPerc
        : (Number(yeetBalance) / Number(TARGETS.MAX_YEET)) * 100 - softCapPerc; // 100% of hard cap minus soft cap
    softCapDisp =
      Number(yeetBalance) > Number(TARGETS.SOFT_CAP)
        ? softCapPerc
        : hardCapDisp;
  }
  
  return (
    <ProgressBox>
      <DataGrid>
        {validCaps && (
          <DataIndicator
            size="sm"
            label={`${softCapReached ? "⭐ " : ""}Softcap:`}
            data={yeetBalance != null ? fromWei(TARGETS.SOFT_CAP) : "--"}
          />
        )}
        {validCaps && (
          <DataIndicator
            size="sm"
            label={`${hardCapReached ? "⭐ " : ""}Hardcap:`}
            data={
              Number(TARGETS.MAX_YEET) / 10 ** TARGETS.STAKE_TOKEN_DECIMALS ||
              "?"
            }
          />
        )}
        {yeetBalance && (
          <DataIndicator
            size="sm"
            label={`Total ${TARGETS.STAKE_TOKEN_SYMBOL} Yeeted:`}
            data={yeetBalance != null ? fromWei(yeetBalance) : "--"}
          />
        )}
      </DataGrid>
      {validCaps && (
      <Progress
        backgroundColor="black"
        progressSection={[
          {
            color: "rgba(142,90,55,0.98)",
            percentage: `${yeetBalance ? softCapDisp : 0}%`,
          },
          {
            color: "#663333",
            percentage: `${yeetBalance ? hardCapDisp : 0}%`,
          },
        ]}
      />
      )}
    </ProgressBox>
  );
};
