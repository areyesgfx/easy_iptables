# Easy IPTables

A web-based IPTables rule generator that simplifies the creation of Linux firewall rules through an intuitive user interface.

## Features

- Visual rule generation for IPTables
- Support for common chains (INPUT, FORWARD, OUTPUT)
- Protocol selection (TCP, UDP, IP, ICMP)
- Action configuration (ACCEPT, DROP, QUEUE)
- Source and destination IP/port configuration
- Rule ordering capability
- One-click rule copying to clipboard
- Real-time rule preview

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/areyesgfx/easy_iptables.git
cd easy_iptables
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select the desired chain (INPUT, FORWARD, OUTPUT)
2. Choose the protocol (TCP, UDP, IP, ICMP)
3. Set the action (ACCEPT, DROP, QUEUE)
4. Enter source IP address and port (optional)
5. Enter destination IP address and port (optional)
6. Specify rule order if needed
7. Copy the generated rule using the copy button
8. Apply the rule in your Linux system

## Development

- Run development server: `npm dev`
- Build for production: `npm build`
- Start production server: `npm start`
- Run linter: `npm lint`
- Format code: `npm format:write`
- Type check: `npm typecheck`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Create T3 App](https://create.t3.gg/)