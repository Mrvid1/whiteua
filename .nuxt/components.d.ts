
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AdsBlock': typeof import("../components/AdsBlock.vue")['default']
    'AppFooter': typeof import("../components/AppFooter.vue")['default']
    'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'AppHeaderUser': typeof import("../components/AppHeaderUser.vue")['default']
    'BalanceCard': typeof import("../components/BalanceCard.vue")['default']
    'FormInput': typeof import("../components/FormInput.vue")['default']
    'PrimaryButton': typeof import("../components/PrimaryButton.vue")['default']
    'SecondaryButton': typeof import("../components/SecondaryButton.vue")['default']
    'DepositAppCardInfo': typeof import("../components/deposit/AppCardInfo.vue")['default']
    'HomeAppCardInvest': typeof import("../components/home/AppCardInvest.vue")['default']
    'MyinvestAppCardAdvice': typeof import("../components/myinvest/AppCardAdvice.vue")['default']
    'WithdrawAppCardInfo': typeof import("../components/withdraw/AppCardInfo.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'Notivue': typeof import("notivue")['Notivue']
    'NotivueSwipe': typeof import("notivue")['NotivueSwipe']
    'NotivueKeyboard': typeof import("notivue")['NotivueKeyboard']
    'Notification': typeof import("notivue")['Notification']
    'Notifications': typeof import("notivue")['Notifications']
    'NotificationProgress': typeof import("notivue")['NotificationProgress']
    'NotificationsProgress': typeof import("notivue")['NotificationsProgress']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAdsBlock': LazyComponent<typeof import("../components/AdsBlock.vue")['default']>
    'LazyAppFooter': LazyComponent<typeof import("../components/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../components/AppHeader.vue")['default']>
    'LazyAppHeaderUser': LazyComponent<typeof import("../components/AppHeaderUser.vue")['default']>
    'LazyBalanceCard': LazyComponent<typeof import("../components/BalanceCard.vue")['default']>
    'LazyFormInput': LazyComponent<typeof import("../components/FormInput.vue")['default']>
    'LazyPrimaryButton': LazyComponent<typeof import("../components/PrimaryButton.vue")['default']>
    'LazySecondaryButton': LazyComponent<typeof import("../components/SecondaryButton.vue")['default']>
    'LazyDepositAppCardInfo': LazyComponent<typeof import("../components/deposit/AppCardInfo.vue")['default']>
    'LazyHomeAppCardInvest': LazyComponent<typeof import("../components/home/AppCardInvest.vue")['default']>
    'LazyMyinvestAppCardAdvice': LazyComponent<typeof import("../components/myinvest/AppCardAdvice.vue")['default']>
    'LazyWithdrawAppCardInfo': LazyComponent<typeof import("../components/withdraw/AppCardInfo.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNotivue': LazyComponent<typeof import("notivue")['Notivue']>
    'LazyNotivueSwipe': LazyComponent<typeof import("notivue")['NotivueSwipe']>
    'LazyNotivueKeyboard': LazyComponent<typeof import("notivue")['NotivueKeyboard']>
    'LazyNotification': LazyComponent<typeof import("notivue")['Notification']>
    'LazyNotifications': LazyComponent<typeof import("notivue")['Notifications']>
    'LazyNotificationProgress': LazyComponent<typeof import("notivue")['NotificationProgress']>
    'LazyNotificationsProgress': LazyComponent<typeof import("notivue")['NotificationsProgress']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AdsBlock: typeof import("../components/AdsBlock.vue")['default']
export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const AppHeaderUser: typeof import("../components/AppHeaderUser.vue")['default']
export const BalanceCard: typeof import("../components/BalanceCard.vue")['default']
export const FormInput: typeof import("../components/FormInput.vue")['default']
export const PrimaryButton: typeof import("../components/PrimaryButton.vue")['default']
export const SecondaryButton: typeof import("../components/SecondaryButton.vue")['default']
export const DepositAppCardInfo: typeof import("../components/deposit/AppCardInfo.vue")['default']
export const HomeAppCardInvest: typeof import("../components/home/AppCardInvest.vue")['default']
export const MyinvestAppCardAdvice: typeof import("../components/myinvest/AppCardAdvice.vue")['default']
export const WithdrawAppCardInfo: typeof import("../components/withdraw/AppCardInfo.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const Notivue: typeof import("notivue")['Notivue']
export const NotivueSwipe: typeof import("notivue")['NotivueSwipe']
export const NotivueKeyboard: typeof import("notivue")['NotivueKeyboard']
export const Notification: typeof import("notivue")['Notification']
export const Notifications: typeof import("notivue")['Notifications']
export const NotificationProgress: typeof import("notivue")['NotificationProgress']
export const NotificationsProgress: typeof import("notivue")['NotificationsProgress']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAdsBlock: LazyComponent<typeof import("../components/AdsBlock.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyAppHeaderUser: LazyComponent<typeof import("../components/AppHeaderUser.vue")['default']>
export const LazyBalanceCard: LazyComponent<typeof import("../components/BalanceCard.vue")['default']>
export const LazyFormInput: LazyComponent<typeof import("../components/FormInput.vue")['default']>
export const LazyPrimaryButton: LazyComponent<typeof import("../components/PrimaryButton.vue")['default']>
export const LazySecondaryButton: LazyComponent<typeof import("../components/SecondaryButton.vue")['default']>
export const LazyDepositAppCardInfo: LazyComponent<typeof import("../components/deposit/AppCardInfo.vue")['default']>
export const LazyHomeAppCardInvest: LazyComponent<typeof import("../components/home/AppCardInvest.vue")['default']>
export const LazyMyinvestAppCardAdvice: LazyComponent<typeof import("../components/myinvest/AppCardAdvice.vue")['default']>
export const LazyWithdrawAppCardInfo: LazyComponent<typeof import("../components/withdraw/AppCardInfo.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNotivue: LazyComponent<typeof import("notivue")['Notivue']>
export const LazyNotivueSwipe: LazyComponent<typeof import("notivue")['NotivueSwipe']>
export const LazyNotivueKeyboard: LazyComponent<typeof import("notivue")['NotivueKeyboard']>
export const LazyNotification: LazyComponent<typeof import("notivue")['Notification']>
export const LazyNotifications: LazyComponent<typeof import("notivue")['Notifications']>
export const LazyNotificationProgress: LazyComponent<typeof import("notivue")['NotificationProgress']>
export const LazyNotificationsProgress: LazyComponent<typeof import("notivue")['NotificationsProgress']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
