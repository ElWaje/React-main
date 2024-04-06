export const prestamoDeFiABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prestatario",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum PrestamoDeFi.EstadoPrestamo",
        name: "estado",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
    ],
    name: "CambioEstadoPrestamo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prestatario",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "plazo",
        type: "uint256",
      },
    ],
    name: "SolicitudPrestamo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nuevoCliente",
        type: "address",
      },
    ],
    name: "altaCliente",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nuevoPrestamista",
        type: "address",
      },
    ],
    name: "altaPrestamista",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "aprobarPrestamo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "clientes",
    outputs: [
      {
        internalType: "bool",
        name: "activado",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "saldoGarantia",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositarGarantia",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "empleadosPrestamista",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "liquidarGarantia",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "obtenerDetalleDePrestamo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "prestatario",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "monto",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "plazo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tiempoSolicitud",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tiempoLimite",
            type: "uint256",
          },
          {
            internalType: "enum PrestamoDeFi.EstadoPrestamo",
            name: "estado",
            type: "uint8",
          },
        ],
        internalType: "struct PrestamoDeFi.Prestamo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
    ],
    name: "obtenerPrestamosPorPrestatario",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "reembolsarPrestamo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "socioPrincipal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "monto_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "plazo_",
        type: "uint256",
      },
    ],
    name: "solicitarPrestamo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
