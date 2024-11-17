"use client";

import { useState, useEffect } from "react";

export function FirewallRuleGenerator() {
  // States
  const [chain, setChain] = useState("");
  const [protocol, setProtocol] = useState("");
  const [action, setAction] = useState("");
  const [srcIpAddress, setSrcIpAddress] = useState("");
  const [srcPort, setSrcPort] = useState("");
  const [dstIpAddress, setDstIpAddress] = useState("");
  const [dstPort, setDstPort] = useState("");
  const [ruleOrder, setRuleOrder] = useState("");
  const [generatedRule, setGeneratedRule] = useState("");

  // Function to generate the firewall rule
  const generateRule = (
    chain: string,
    protocol: string,
    action: string,
    srcIpAddress: string,
    srcPort: string,
    dstIpAddress: string,
    dstPort: string,
    ruleOrder: string,
  ) => {
    let cmd = `iptables ${ruleOrder || "-A"} ${chain} -p ${protocol}`;

    // Source IP Address
    if (srcIpAddress) {
      cmd += ` -s ${srcIpAddress}`;
    }

    // Source Port
    if (srcPort) {
      cmd += ` --sport ${srcPort}`;
    }

    // Destination IP Address
    if (dstIpAddress) {
      cmd += ` -d ${dstIpAddress}`;
    }

    // Destination Port
    if (dstPort) {
      cmd += ` --dport ${dstPort}`;
    }

    cmd += ` -j ${action}`;
    return cmd;
  };

  useEffect(() => {
    const newRule = generateRule(
      chain,
      protocol,
      action,
      srcIpAddress,
      srcPort,
      dstIpAddress,
      dstPort,
      ruleOrder,
    );
    setGeneratedRule(newRule);
  }, [
    chain,
    protocol,
    action,
    srcIpAddress,
    srcPort,
    dstIpAddress,
    dstPort,
    ruleOrder,
  ]); // Dependencies

  // Function to copy the generated rule to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedRule)
      .then(() => {
        alert("Rule copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      {/* Input fields for protocol, IP, etc. */}
      <div className="flex flex-wrap space-x-4">
        <div className="relative mt-4 w-1/6">
          <select
            className="w-full h-12 text-lg rounded-md text-center text-gray-400"
            name="chain"
            id="chain"
            required
            onChange={(e) => setChain(e.target.value)}
          >
            <option value="INPUT">INPUT</option>
            <option value="FORWARD">FORWARD</option>
            <option value="OUTPUT">OUTPUT</option>
          </select>
        </div>

        <div className="relative mt-4 w-1/6">
          <select
            className="w-full h-12 text-lg rounded-md text-center text-gray-400"
            name="protocol"
            id="protocol"
            required
            onChange={(e) => setProtocol(e.target.value)}
          >
            <option value="TCP">TCP</option>
            <option value="UDP">UDP</option>
            <option value="IP">IP</option>
            <option value="ICMP">ICMP</option>
          </select>
        </div>

        <div className="relative mt-4 w-1/6">
          <select
            className="w-full h-12 text-lg rounded-md text-center text-gray-400"
            name="action"
            id="action"
            required
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="ACCEPT">ACCEPT</option>
            <option value="DROP">DROP</option>
            <option value="QUEUE">QUEUE</option>
          </select>
        </div>

        <div className="mt-4">
          <input
            className="h-12 text-lg rounded-md text-center text-gray-400"
            type="text"
            id="srcIpAddress"
            name="srcIpAddress"
            placeholder="SOURCE IP"
            required
            onChange={(e) => setSrcIpAddress(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <input
            className="h-12 text-lg rounded-md text-center text-gray-400"
            type="number"
            id="srcPort"
            name="srcPort"
            placeholder="SOURCE PORT"
            required
            onChange={(e) => setSrcPort(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <input
            className="h-12 text-lg rounded-md text-center text-gray-400"
            type="text"
            id="dstIpAddres"
            name="dstIpAddres"
            placeholder="DESTINATION IP"
            required
            onChange={(e) => setDstIpAddress(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <input
            className="h-12 text-lg rounded-md text-center text-gray-400"
            type="number"
            id="dstPort"
            name="dstPort"
            placeholder="DESTINATION PORT"
            required
            onChange={(e) => setDstPort(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <input
            className="h-12 text-lg rounded-md text-center text-gray-400"
            type="number"
            id="ruleOrder"
            name="ruleOrder"
            placeholder="RULE ORDER"
            required
            onChange={(e) => setRuleOrder(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p id="generatedRule" className="text-center mr-2">{generatedRule}</p>
        <input
          type="image"
          width={20}
          height={20}
          src="https://utfs.io/f/TqtFLTnGAiaPqey0bCWN7YfTt2rVlvawxgp1O9mJK8dXABRU"
          onClick={copyToClipboard}
          alt="copy icon"
        ></input>
      </div>
    </div>
  );
}

