/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Silo,
  SiloFactory,
  SiloFactory_NewSilo,
  Silo_AccruedInterest,
  Silo_Approval,
  Silo_Borrow,
  Silo_CollateralTypeChanged,
  Silo_Deposit,
  Silo_DepositProtected,
  Silo_EIP712DomainChanged,
  Silo_FlashLoan,
  Silo_HooksUpdated,
  Silo_Initialized,
  Silo_NotificationSent,
  Silo_Repay,
  Silo_Transfer,
  Silo_Withdraw,
  Silo_WithdrawProtected,
  Silo_WithdrawnFeed,

} from "generated";

SiloFactory.NewSilo.contractRegister(
  async ({ event, context }) => {
    console.log("Silo Added", event.params.silo0);  
    console.log("Silo Added", event.params.silo1);
    context.addSilo(event.params.silo0);
    context.addSilo(event.params.silo1);
  },
  { preRegisterDynamicContracts: true }
);

SiloFactory.NewSilo.handler(async ({ event, context }) => {
  const entity: SiloFactory_NewSilo = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
    token0: event.params.token0,
    token1: event.params.token1,
    silo0: event.params.silo0,
    silo1: event.params.silo1,
    siloConfig: event.params.siloConfig,
  };
//hello
  context.SiloFactory_NewSilo.set(entity);
});
Silo.AccruedInterest.handler(async ({ event, context }) => {
  const entity: Silo_AccruedInterest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    hooksBefore: event.params.hooksBefore,
  };

  context.Silo_AccruedInterest.set(entity);
});

Silo.Approval.handler(async ({ event, context }) => {
  const entity: Silo_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Silo_Approval.set(entity);
});

Silo.Borrow.handler(async ({ event, context }) => {
  const entity: Silo_Borrow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Borrow.set(entity);
});

Silo.CollateralTypeChanged.handler(async ({ event, context }) => {
  const entity: Silo_CollateralTypeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    borrower: event.params.borrower,
  };

  context.Silo_CollateralTypeChanged.set(entity);
});

Silo.Deposit.handler(async ({ event, context }) => {
  const entity: Silo_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Deposit.set(entity);
});

Silo.DepositProtected.handler(async ({ event, context }) => {
  const entity: Silo_DepositProtected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_DepositProtected.set(entity);
});

Silo.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: Silo_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Silo_EIP712DomainChanged.set(entity);
});

Silo.FlashLoan.handler(async ({ event, context }) => {
  const entity: Silo_FlashLoan = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.Silo_FlashLoan.set(entity);
});

Silo.HooksUpdated.handler(async ({ event, context }) => {
  const entity: Silo_HooksUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    hooksBefore: event.params.hooksBefore,
    hooksAfter: event.params.hooksAfter,
  };

  context.Silo_HooksUpdated.set(entity);
});

Silo.Initialized.handler(async ({ event, context }) => {
  const entity: Silo_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Silo_Initialized.set(entity);
});

Silo.NotificationSent.handler(async ({ event, context }) => {
  const entity: Silo_NotificationSent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    notificationReceiver: event.params.notificationReceiver,
    success: event.params.success,
  };

  context.Silo_NotificationSent.set(entity);
});

Silo.Repay.handler(async ({ event, context }) => {
  const entity: Silo_Repay = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Repay.set(entity);
});

Silo.Transfer.handler(async ({ event, context }) => {
  const entity: Silo_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Silo_Transfer.set(entity);
});

Silo.Withdraw.handler(async ({ event, context }) => {
  const entity: Silo_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_Withdraw.set(entity);
});

Silo.WithdrawProtected.handler(async ({ event, context }) => {
  const entity: Silo_WithdrawProtected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.Silo_WithdrawProtected.set(entity);
});

Silo.WithdrawnFeed.handler(async ({ event, context }) => {
  const entity: Silo_WithdrawnFeed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    daoFees: event.params.daoFees,
    deployerFees: event.params.deployerFees,
  };

  context.Silo_WithdrawnFeed.set(entity);
});
