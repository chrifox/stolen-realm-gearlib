import { useLocation } from "react-router-dom";

function decodeQueryParam(paramString: string) {
  try {
    const jsonString = atob(decodeURIComponent(paramString));
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Invalid build data", e);
    return null;
  }
}

export function useUrl() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const encodedStats = params.get("stats");
  const encodedEquipment = params.get("equipment");
  const encodedFortunes = params.get("fortunes");

  const stats = encodedStats ? decodeQueryParam(encodedStats) : null;
  const equipment = encodedEquipment
    ? decodeQueryParam(encodedEquipment)
    : null;
  const fortunes = encodedFortunes ? decodeQueryParam(encodedFortunes) : null;

  function encodeQueryParam(paramObject: object): string {
    const jsonString = JSON.stringify(paramObject);
    const base64String = btoa(jsonString);
    return encodeURIComponent(base64String);
  }

  return {
    encodeQueryParam,

    stats,
    equipment,
    fortunes,
  };
}
