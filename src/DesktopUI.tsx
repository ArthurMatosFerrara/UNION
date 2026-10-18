import type { PropsWithChildren } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export const KeyboardInput = 'input';
export const KeyboardTextarea = 'textarea';
export function MobileScroll({className,children}:PropsWithChildren<{className?:string}>){return <div className={className}>{children}</div>}
export function Carousel({className,children}:PropsWithChildren<{className?:string}>){return <div className={className}>{children}</div>}
export function BottomSheet({open,onOpenChange,title,description,children}:PropsWithChildren<{open:boolean;onOpenChange:(open:boolean)=>void;title:string;description?:string}>){return <Dialog.Root open={open} onOpenChange={onOpenChange}><Dialog.Portal><Dialog.Overlay className="desktop-overlay"/><Dialog.Content className="desktop-dialog"><Dialog.Title>{title}</Dialog.Title>{description?<Dialog.Description>{description}</Dialog.Description>:<Dialog.Description className="sr-only">Detalhes e ações de {title}</Dialog.Description>}<Dialog.Close className="dialog-close" aria-label="Fechar janela"><Cross2Icon/></Dialog.Close>{children}</Dialog.Content></Dialog.Portal></Dialog.Root>}
