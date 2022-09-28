# Metrix Project

퍼블리싱 산출물 디렉토리 구조
---
- 폴더 구조
```markdown
metrix
   ├  assets : 정적 파일 소스
   │  ├  css  : css폴더
   │  ├  images : images폴더
   │  ├  js : js폴더 (동작관련)
   │  ├  plugin : plugin폴더
   │  ├  scss  : scss폴더
   │  └  webfonts : font폴더
   ├  components  : components폴더
   │  ├  router.js : router
   │  └  store.js : store
   ├  main : 메인페이지
   └  index : 페이지별 link
```

- 컴포넌트 구조
```markdown
components
   ├  common : 공통 컴포넌트
   │  ├  AuthMain  : login,sidn up 페이지 메인
   │  ├  HeaderMain  : header 컴포넌트
   │  ├  LogIn  : login 컴포넌트
   │  ├  SideNavigation  : Navigation 컴포넌트
   │  └  SignUp  : sidn up 컴포넌트
   ├  customers  : customers 페이지 컴포넌트
   │  └  CustomersMain  : lcustomers 페이지 메인
   ├  dashboard  : dashboard 페이지 컴포넌트
   │  └  DashboardMain  : dashboard 페이지 메인
   ├  inventory  : inventory 페이지 컴포넌트
   │  └  InventoryMain  : inventory 페이지 메인
   ├  orders  : orders 페이지 컴포넌트
   │  └  OrdersMain  : orders 페이지 메인
   └  settings  : settings 페이지 컴포넌트
      └  SettingsMain  : settings 페이지 메인

```

퍼블리싱 작업내용
---
- style.scss 구조
  ```
  @import
	'common/font.scss',
	'common/normalize_v3.0.3.scss',
	'common/normalize_v8.0.1.scss',
	'common/reset.scss',
	'common/common.scss',
	'utils/mixin.scss',
	'utils/variables.scss',
	'layout/navigation.scss',
	'layout/auth.scss',
	'layout/header.scss',
	'layout/container.scss',
	'layout/dashboard.scss',
	'layout/settings.scss'
  ```
- 기본폰트 : Poppins, Inter