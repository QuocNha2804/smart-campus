// src/utils/serviceUtils.ts
import { CampusService } from "../types";

export function getServiceDisplayText(service: CampusService): string {
  const statusMap = {
    open: { icon: "🟢", text: "Đang mở cửa" },
    closed: { icon: "🔴", text: "Đã đóng cửa" },
    busy: { icon: "🟡", text: "Đang bận" },
  };

  const status = statusMap[service.openingStatus] || {
    icon: "❓",
    text: "Không xác định",
  };

  let result = `${service.name} (ID: ${service.id})\n`;
  result += `${status.icon} ${status.text}`;

  if (service.waitTime) {
    result += `\nThời gian chờ: ${service.waitTime} phút`;
  }

  result += `\n Địa điểm: ${service.locations.join(" → ")}`;

  return result;
}
