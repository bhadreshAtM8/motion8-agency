import { AI_AUTOMATION_DETAILS } from "./ai-automation";
import { DIGITAL_MARKETING_DETAILS } from "./digital-marketing";
import { SOFTWARE_DEVELOPMENT_DETAILS } from "./software-development";
import type { ServiceDetail } from "./types";

export type { ServiceDetail } from "./types";

const ALL: Record<string, ServiceDetail> = {
  ...DIGITAL_MARKETING_DETAILS,
  ...SOFTWARE_DEVELOPMENT_DETAILS,
  ...AI_AUTOMATION_DETAILS,
};

export function getServiceDetail(pillarSlug: string, serviceSlug: string): ServiceDetail | undefined {
  return ALL[`${pillarSlug}/${serviceSlug}`];
}
